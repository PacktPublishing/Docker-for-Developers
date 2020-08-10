// Demo publisher container
//
// publisher/index.js

process.env.DEBUG = "publisher,mqtt-traffic";

const debug = require("debug")("publisher"),
  debugm = require("debug")("mqtt-traffic"),
  mqtt_host = process.env.MQTT_HOST || "mosca",
  mqttUrl = `mqtt://${mqtt_host}`,
  mqtt_port = 1883;

/**
 * wait_for_services
 *
 * This method is called at startup to wait for any dependant containers to be running.
 */
const waitOn = require("wait-on"),
  wait_for_services = async () => {
  try {
    await waitOn({ resources: [`tcp:${mqtt_host}:${mqtt_port}`] });
  } catch (e) {
    debug("waitOn exception", e.stack);
  }
};

const main = async () => {
  debug(`publisher miscroservice, about to wait for MQTT host(${mqtt_host}, ${mqtt_port}`);
  await wait_for_services();
  debug("---> wait succeeded");
  const MQTT = require("mqtt"),
   mqtt = MQTT.connect(mqttUrl, mqtt_port);

  debug("publisher connecting to MQTT", mqttUrl);
  mqtt.on("connect", async () => {
    debug("connected to ", mqtt_host, "port", mqtt_port);

    const express = require("express"),
      app = express(),
      port = 3000;

    const html = (res, topic, message) => {
      let o = "";
      try {
        o =
          message && message.length > 0
            ? JSON.stringify(JSON.parse(message), null, 4)
            : "";
      } catch (e) {
        console.log("exception ", message, e.stack);
      }
      const redis_checked = res.dbtype == "redis" ? "checked" : "",
        mongo_checked =
          res.dbtype == "mongodb"
            ? "checked"
            : redis_checked === "checked"
            ? ""
            : "checked";
      //    debug(`message(${message})`);
      res.send(`
    <html>
      <head>
        <title>Publisher</title>
      </head>
      <body>
        <h1>Publisher</h1>
        <form action="/post">
          <div><input type="radio" ${mongo_checked} name="dbtype" value="mongodb">MongoDB</input></div>
          <div><input type="radio" ${redis_checked} name="dbtype" value="redis">Redis</input></div>
          <div> <input type="text" name="value"> VALUE </input> </div>
          <button type="submit" name="button" value="list">List</button>
          <button type="submit" name="button" value="count">Count</button>
          <button type="submit" name="button" value="add">Add</button>
          <button type="submit" name="button" value="remove">Remove</button>
          <button type="submit" name="button" value="flush">Flush</button>
        </form>
        <h2>Result</h2>
        <h5>
          <div>${topic}</div>
          <pre>${o}</pre>
          </h5>
      </body>
      </html>
    `);
    };

    app.get("/", (req, res) => {
      html(res, "", "");
    });

    mqtt.subscribe(["publisher", "publisher/#"], err => {
      if (err) {
        debug("err!", err);
      }
    });

    const messages = [];

    mqtt.on("message", async (topic, message) => {
      message = message.toString();
      debugm("<<< MESSAGE topic", topic, "message", message);

      const index = topic.indexOf("publisher/");
      if (index !== -1) {
        //      debug("result", topic.substr(10), "=", JSON.parse(message));
        messages.push({ topic: topic, message: message });
        return;
      }
    });

    const sleep = async msec => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          debug("slept");
          resolve();
        }, msec);
      });
    };

    const receive = async () => {
      debug("receive");
      for (i = 0; i < 10; i++) {
        if (messages.length !== 0) {
          return messages.pop();
        }
        await sleep(1000);
      }
      return "timeout";
    };

    const send = async (topic, value) => {
      try {
        await mqtt.publish(`subscriber/${topic}`, value, {
          qos: 0,
          retain: false
        });
        const result = await receive();
        debug("result", result);
        return result;
      } catch (e) {
        debug("ERROR", e.message, e.stack);
      }
    };

    app.get("/post", async (req, res) => {
      const { dbtype, value, button } = req.query;
      let result,
        o,
        v = value;

      res.dbtype = dbtype;
      switch (dbtype) {
        case "mongodb":
          if (value === undefined || value.length < 1) {
            v = JSON.stringify({});
          }
          switch (button) {
            case "list":
              result = await send("mongo-list", v);
              html(res, `mongo-list(${value}):`, result.message);
              break;
            case "count":
              result = await send("mongo-count", v);
              html(res, `mongo-count(${value}):`, result.message);
              break;
            case "add":
              if (value === undefined || value.length === 0) {
                html(res, "*** add mongo: value required");
              }
              result = await send("mongo-add", v);
              html(res, `mongo-add({${value}):`, result.message);
              break;
            case "remove":
              if (value === undefined || value.length === 0) {
                html(res, "*** remove mongo: value required");
              }
              result = await send("mongo-remove", value);
              html(res, `mongo-remove({${value}):`, result.message);
              break;
            case "flush":
              result = await send("mongo-removeall", undefined);
              html(res, `mongo-flush`, result.message);
              break;
            default:
              html(res, "unknown button mongo! " + button);
              break;
          }
          break;
        case "redis":
          switch (button) {
            case "list":
              result = await send("redis-list", value);
              html(res, `redis-list(${value}):`, result.message);
              break;
            case "count":
              result = await send("redis-count", value);
              html(res, `redis-count(${value}):`, result.message);
              break;
            case "add":
              if (value === undefined || value.length === 0) {
                html(res, "*** add redis: value required");
              }
              result = await send("redis-set", value);
              html(res, `redis-add({${value}):`, result.message);
              break;
            case "remove":
              if (value === undefined || value.length === 0) {
                html(res, "*** remove redis: value required");
              }
              result = await send("redis-del", value);
              html(res, `redis-remove({${value}):`, result.message);
              break;
            case "flush":
              result = await send("redis-flushall", undefined);
              html(res, `redis-flush`, result.message);
              break;
            default:
              html(res, "unknown button redis! " + button);
              break;
          }
          break;
        default:
          html(res, "fail! " + dbtype);
          break;
      }
    });

    app.listen(port, () => {
      debug("listening on port ", port);
    });
  });
};

main();


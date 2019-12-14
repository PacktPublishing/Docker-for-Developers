// Demo publisher container
//
// publisher/index.js
//

process.env.DEBUG = "publisher";

const debug = require("debug")("publisher"),
  debugm = require("debug")("mqtt-traffic"),
  MQTT = require("mqtt"),
  host = `mqtt://${process.env.HOSTIP}`,
  port = 1883,
  client = MQTT.connect(host, port);

client.on("connect", () => {
  debug("connected to ", host, "port", port);
  debug("\n\nsend MQTT messages with topic publisher and any message you like");
  client.subscribe(["publisher", "publisher/#"], err => {
    if (err) {
      debug("err!", err);
    }
  });
  client.on("message", async (topic, message) => {
    message = message.toString();
    debugm("<<< MESSAGE topic", topic, "message", message);
    const index = topic.indexOf("publisher/");
    if (index !== -1) {
      debug("result", topic.substr(10), "=", JSON.parse(message));
      return;
    }
    const parts = message.split(" ");
    const new_topic = `subscriber/${parts[0]}`;
    debugm(" >>> topic", new_topic, "message", parts[1]);
    const t = parts.shift();
    await client.publish(
      `subscriber/${t}`,
      JSON.stringify(parts.join(" ")),
      {
        qos: 0,
        retain: false
      }
    );
  });
});


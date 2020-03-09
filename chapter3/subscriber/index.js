// Demo subscriber container
//
// subscriber/index.js
//

process.env.DEBUG = "subscriber";

const debug = require("debug")("subscriber"),
  MongoClient = require("mongodb").MongoClient,
  mongoUrl = `mongodb://${process.env.HOSTIP}:27017`,
  mongoDB = "book",
  mongo = new MongoClient(mongoUrl),
  MQTT = require("mqtt"),
  mqttHost = `mqtt://${process.env.HOSTIP}`,
  mqttPort = 1883,
  redisHost = `redis://${process.env.HOSTIP}`;

var Redis = require("async-redis"),
  redis = Redis.createClient(redisHost);

// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, function() { /* ... */ });

redis.on("error", function(err) {
  debug("REDIS Error " + err);
});

const topics = {
  "subscriber/mongo-count": async (collection, message) => {
    // return count of records from MongoDB
    debug("--- mongodb count", message);
    if ((typeof message).toLowerCase() === "string") {
      const record = { text: message };
      const records = await collection.find(record).toArray();
      return records.length;
    } else {
      const records = await collection.find(message).toArray();
      return records.length;
    }
  },

  "subscriber/mongo-add": async (collection, message) => {
    // add record to mongo database
    debug("--- mongodb add", message);
    const record = [{ text: message }];
    return await collection.insertMany(record);
  },

  "subscriber/mongo-list": async (collection, message) => {
    // query database for document specified in message
    // message is a JSON object
    if ((typeof message).toLowerCase() === "string") {
      // filter records returned
      const record = { text: message };
      const records = await collection.find(record).toArray();
      return records;
    } else {
      // return all records
      const records = await collection.find(message).toArray();
      return records;
    }
  },

  "subscriber/mongo-remove": async (collection, message) => {
    // remove record from database
    debug("--- mongodb remove", message);
    if ((typeof message).toLowerCase() === "string") {
      const record = { text: message };
      const result = await collection.deleteOne(record);
      return result.result;
    } else {
      const result = await collection.deleteOne(message);
      return result.result;
    }
  },

  "subscriber/mongo-removeall": async (collection, message) => {
    // remove all records from database
    debug("--- mongodb removeall", message);
    const result = await collection.remove({});
    return result;
  },

  "subscriber/redis-count": async (collection, message) => {
    // return count of records from redis
    debug("--- redis count '" + message + "'");
    const keys = await redis.keys(message || "*");
    //    debug("records", records);
    return keys.length;
  },

  "subscriber/redis-flushall": async (collection, message) => {
    // reset database to empty
    debug("--- redis flushall '" + message + "'");
    const keys = await redis.flushall();
    debug("flushall", keys);
  },

  "subscriber/redis-set": async (collection, message) => {
    // return count of records from redis
    const parts = message.split(~message.indexOf("=") ? "=" : " ");
    debug("--- redis add", message, parts);
    return await redis.set(parts);
    //    return await redis.set(["hash key2", message]);
  },

  "subscriber/redis-list": async (collection, message) => {
    // return array of records from redis
    const keys = await redis.keys(message || "*");
    debug("--- redis list", message, keys);
    const result = {};
    for (const key of keys) {
      result[key] = await redis.get(key);
    }

    return result;
  },

  "subscriber/redis-del": async (collection, message) => {
    // delete a record from redis
    debug("--- redis remove", message);
    return await redis.del(message);
  },

  "subscriber/commands": async (collection, message) => {
    debug("--- COMMANDS", message);
    return JSON.stringify(Object.keys(topics));
  }
};

// Use connect method to connect to the Server
debug("connecting to MongoDB", mongoUrl);
mongo.connect(function(err) {
  if (err) {
    debug("MongoDB connect error:", err);
    process.exit(1);
  }
  debug("Connected to mongodb server", mongoUrl);
  debug("\n");

  const db = mongo.db(mongoDB);

  debug("connecting to MQTT broker", mqttHost, mqttPort);
  const mqtt = MQTT.connect(mqttHost, mqttPort);
  mqtt.on("connect", () => {
    debug("connected to ", mqttHost, "port", mqttPort);
    debug("\n");
    debug("WAITING FOR MESSAGES FROM PUBLISHER");
    mqtt.subscribe("subscriber/#", err => {
      if (err) {
        debug("MQTT subscribe error:", err);
      }
    });

    mqtt.on("message", async (topic, message) => {
      message = message.toString();
      try {
        message = JSON.parse(message);
      } catch (e) {}
      debug("<<< topic", topic, "message", message);
      const f = topics[topic];
      if (f !== undefined) {
        const msg = await f(db.collection("records"), message);
        if (msg !== undefined) {
          const new_topic = topic.replace("subscriber", "publisher");
          debug("  >>> topic: ", new_topic, "message:", msg);
          await mqtt.publish(
            topic.replace("subscriber", "publisher"),
            JSON.stringify(msg),
            { qos: 0, retain: false }
          );
        }
      }
    });
  });
});

const dotenv = require("dotenv");
dotenv.config();
const mqtt = require("mqtt");
const timestamp = require("../util/Timestamp")

const { log } = console;

const user = process.env.BROKER_USERNAME;
const pass = process.env.BROKER_PASSWORD;
//const port = process.env.PORT;
const broker_uri = process.env.BROKER_URI

const client = mqtt.connect(broker_uri, {
  username: user,
  password: pass,
});

client.on("connect", () => {
  log("connected!");
  client.subscribe("presence", (err) => {
    if (!err) {
      setInterval(
        () => client.publish("presence", timestamp("Hello World!")),
        3000
      );
    }
  });
});

client.on("message", (topic, message) => {
  // message is Buffer
  console.log(message.toString());
  // client.end();
});

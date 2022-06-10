const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: "6e1fc2723b4742459598d061fee7e5b8",
  captureUncaught: true,
  captureUnhandledRejections: true,
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/hours", (req, res) => {
  rollbar.info("Someone asked how long they should play.");
  let hours = "4 hours";
  res.status(200).send(hours);
});

app.get("/name", (req, res) => {
  rollbar.info("Someone got a random name!")
  let names = ["Mason", "Nate", "DJ", "Lukas"];
  let name = names[Math.floor(Math.random() * names.length)];
  res.status(200).send(name);
});
const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Listening on ${port}`));

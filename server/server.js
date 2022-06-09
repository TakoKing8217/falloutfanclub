const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));

// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: "6e1fc2723b4742459598d061fee7e5b8",
  captureUncaught: true,
  captureUnhandledRejections: true,
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

const port = process.env.PORT || 5005;
app.listen(port, () => console.log(`Listening on ${port}`));

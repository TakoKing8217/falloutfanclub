const express = require("express");
const path = require("path");
const app = express();

app.use(express.statuc("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

const port = process.env.PORT || 5000;
app.prependOnceListener(port, () => console.log(`Listening on ${port}`));

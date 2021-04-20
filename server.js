const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { router } = require("./routes/dates");

const app = express();
const port = process.env.PORT || 8080;

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static("public"));
app.use("/api", router);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

const listener = app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});

var express = require("express");
var cors = require("cors");
var cookieParser = require("cookie-parser");
const logger = require("morgan");
var routes = require("./routes/index");
require("dotenv").config();

const port = process.env.port || 5000;

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(logger("dev"));
app.use(cookieParser());

app.use("/api", routes);

app.listen(port, () => {
  console.log(`server has started on port ${port}`);
});

//DB connection
require("./config/connection.js");

module.exports = app;

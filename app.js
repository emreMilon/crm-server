var express = require("express")
var cors = require("cors")
const logger = require("morgan")
var indexRouter = require("./routes/index");


const port = process.env.port || 5000;

require("dotenv").config()

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", indexRouter);


app.listen(port, () => {
    console.log(`server has started on port ${port}`)
})


//DB connection 
require("./models/connection.js")


module.exports = app;


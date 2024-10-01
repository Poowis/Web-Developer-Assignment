var express = require("express");
var cors = require('cors')
require("dotenv").config();

var tripsRouter = require("./routes/trips");

var app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/trips", tripsRouter);

module.exports = app;

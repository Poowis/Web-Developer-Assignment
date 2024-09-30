var express = require("express");
const { getTrips } = require("../services/trips");
var router = express.Router();

/* GET trips list. */
router.get("/", getTrips);

module.exports = router;

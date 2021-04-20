const express = require("express");
const { handleDate } = require("../controllers/dates");

const router = express.Router();

router.get("/:date?", [], handleDate);

module.exports = { router };

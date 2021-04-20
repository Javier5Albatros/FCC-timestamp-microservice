const express = require("express");
const { handleDate } = require("../controllers/dates");
const { handleNullDate } = require("../middlewares/handleNullDate");
const { handleNumericDate } = require("../middlewares/handleNumericDate");
const { handleStringDate } = require("../middlewares/handleStringDate");

const router = express.Router();

router.get(
  "/:date?",
  [handleNullDate, handleStringDate, handleNumericDate],
  handleDate
);

module.exports = { router };

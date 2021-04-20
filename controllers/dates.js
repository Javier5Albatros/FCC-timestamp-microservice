const { isValidDate } = require("../helpers/isDate");

const handleDate = (req, res) => {
  const date = req.date;
  if (isValidDate(date)) {
    return res.json({
      unix: new Date().getTime(),
      utc: date.toGMTString(),
    });
  } else {
    return res.json({
      error: date.toString(),
    });
  }
};

module.exports = {
  handleDate,
};

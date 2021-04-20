const { isValidDate } = require("../helpers/isDate");

const handleNumericDate = async (req, res, next) => {
  if (!isValidDate(req.date)) {
    const { date } = req.params;
    req.date = new Date(Number(date));
  }
  next();
};

module.exports = {
  handleNumericDate,
};

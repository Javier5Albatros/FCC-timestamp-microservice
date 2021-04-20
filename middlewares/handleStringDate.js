const handleStringDate = async (req, res, next) => {
  if (!req.date) {
    const { date } = req.params;
    req.date = new Date(date);
  }
  next();
};

module.exports = {
  handleStringDate,
};

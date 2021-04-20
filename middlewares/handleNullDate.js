const handleNullDate = async (req, res, next) => {
  const { date } = req.params;
  if (!date) {
    req.date = new Date();
  }
  next();
};

module.exports = {
  handleNullDate,
};

const isDate = (date) => {
  return date instanceof Date;
};

const isValidDate = (date) => {
  return date instanceof Date && !isNaN(date);
};

module.exports = { isDate, isValidDate };

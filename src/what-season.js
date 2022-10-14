const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 class newError extends Error {
  constructor(message) {
      super(message);
  }
};

 function getSeason(date) {
  if (isNaN(Date.parse(date))) {
    throw new newError("Invalid date!");
  }
  if (typeof(date) === "string") {
    return false
  }
  
  if (typeof(date) === "undefined" || date === null) {
    return 'Unable to determine the time of year!'
  }
  let season = date.getMonth();
  
  if (season < 2 || season == 11) {
    return "winter"
  }
  if (season >=2 && season < 5) {
    return "spring"
  }
  if (season >= 5 && season <= 7) {
    return "summer"
  }
  if (season > 7 && season <= 10) {
    return "autumn"
  }
  
}

module.exports = {
  getSeason
};

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
 
 function getSeason(date) {
  if (isNaN(Date.parse(date))) {
    throw new Error("Invalid date!");
  }
  if (typeof(date) === "string") {
    throw new Error("Invalid date!");
  }
  
  if (typeof(date) === "undefined" || date === null) {
    throw new Error('Unable to determine the time of year!');
  }
  if (date instanceof Date) {
    
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
else {
  throw new Error("Invalid date!");
}
  
}

module.exports = {
  getSeason
};

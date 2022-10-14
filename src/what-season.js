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
  let season = date.getMonth();
  let now = new Date();
  // if (now < date) {
  //   return 'Unable to determine the time of year!'
  // }
  if (season < 3 || season == 11) {
    return "winter"
  }
  if (season >=2 && season <= 4) {
    return "spring"
  }
  if (season > 4 && season <= 7) {
    return "summer"
  }
  if (season > 7 && season <= 10) {
    return "autumn"
  }
  
}

module.exports = {
  getSeason
};

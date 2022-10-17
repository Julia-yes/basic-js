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
 class myErrorSeason extends Error {
  constructor(message) {
    super(message); 
    this.name = "myErrorSeason"; 
  }
}
 
 function getSeason(date) {
  if (typeof(date) === "undefined" || date === null) {
    return 'Unable to determine the time of year!';
  }
  if (isNaN(Date.parse(date))) {
    throw new myErrorSeason('Invalid date!');
  }
  if (typeof(date) === "string") {
    throw new myErrorSeason('Invalid date!');
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
  throw new myErrorSeason('Invalid date!');
}
  
}

module.exports = {
  getSeason
};

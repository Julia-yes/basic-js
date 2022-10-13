const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let arr = [...str];
  let result = [];
  let ind = 0;
  let letter = arr[0];
  for (item of arr) {
     if (item !== letter) {
       if (ind > 1) {
         result.push(ind);
       }
       result.push(letter);      
       letter = item;
       ind = 1;
     }
     else {
       ind++
     }
     
  }
  if (ind > 1) {
      result.push(ind);
    }
    result.push(letter);  
  return result.join("")
 }
module.exports = {
  encodeLine
};

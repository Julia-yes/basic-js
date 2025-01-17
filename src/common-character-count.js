const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let arr1 = [...s1];
  let arr2 = [...s2];
  let result = [];
  for (item of arr1) {
    let ind = arr2.indexOf(item);
    if (ind >= 0) {
      result.push(item);
      arr2.splice(ind, 1);
    }
  }
  return result.length
}

module.exports = {
  getCommonCharacterCount
};

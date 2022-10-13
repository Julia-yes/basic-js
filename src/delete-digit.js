const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let arr = Array.from(String(n));
  let result = [];
  for (i = 0; i < arr.length ; i++) {
    test = Array.from(arr);    
    test.splice(i, 1);
    result.push(Number(test.join("")))
  }
 return Math.max.apply(null, result)
}

module.exports = {
  deleteDigit
};

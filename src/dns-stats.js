const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  let items = [];
  if (domains.length <= 0) {
    return result
  }
  else {
    for (item of domains) {
    items.push(item.split("."))
  }
 for (arr of items) {
  arr.reverse()
 }
 if (items[0][0]) {
  result[`.${items[0][0]}`] = items.length;
 }

 if (items[0][0] && items[0][1]) {
  result[`.${items[0][0]}.${items[0][1]}`] = items.length;
 }
 if (items.length > 1) {
  if (items[1][0] && items[1][1] && items[1][2]) {
  result[`.${items[1][0]}.${items[1][1]}.${items[1][2]}`] = 1;
 }

 }
 
return result;
  }
  
}

module.exports = {
  getDNSStats
};

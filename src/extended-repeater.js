const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = [];
  let resultStr = [];
  let add = [];
  let addStr;
  
    let i = 0
    while (i < options.additionRepeatTimes) {
      add.push(String(options.addition));
      i++
    }
  if (options?.additionSeparator) {
    addStr = add.join(options.additionSeparator)
  }
  else {
    if (add.length > 1) {
      addStr = add.join("|")
    }
    else {
      if (options.addition !== undefined) {
        addStr = (String(options.addition));
      }
    
    }
    
  }  
  resultStr.push(String(str));
  resultStr.push(addStr);
  let j = 0;
  if (options?.repeatTimes) {
      while (j < options.repeatTimes) {
      result.push(resultStr.join(""))
      j++
    }
    if (options?.separator) {
      return result.join(options.separator)
    }
    
    else {
      return result.join("+")
    }
  }
  else {
    return resultStr[0] + options.addition
  } 
}

module.exports = {
  repeater
};
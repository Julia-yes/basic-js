const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  
  calculateDepth(arr) {
   let result = [];
   let num = 0;
    function isArr(prop) {
      
      if (Array.isArray(prop)) {
        num++;         
        for (let item of prop) {   
          if (Array.isArray(item)) {
            isArr(item)            
          }
         
        } 
        result.push(num)
        num=1
      }        
  }
  
isArr(arr);
return Math.max(...result)
}
}

module.exports = {
  DepthCalculator
};

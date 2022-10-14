const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  result: [],
   getLength() {
     return this.result.length
   },
   addLink(value) {
     this.result.push(value);
     return this
   },
   removeLink(position) {
     this.result.splice(position-1, 1);
     return this
   },
   reverseChain() {
     this.result.reverse();
     return this
   },
   finishChain() {
    let arr = [];
    for (item of this.result) {
      arr.push(`(${item})`)
    }
    return arr.join("~~")
   }
 };

module.exports = {
  chainMaker
};

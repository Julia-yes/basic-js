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
    if (position > 0 && position < this.result.length) {
     this.result.splice(position-1, 1);
     return this
    }
    else {
      throw new Error('You can\'t remove incorrect link!')
    }
   },
   reverseChain() {
     this.result.reverse();
     return this
   },
   finishChain() {
    let arr = [];
    for (item of this.result) {
      arr.push(`( ${item} )`)
    }
    console.log("!!")
    return arr.join("~~")
   }
 };

module.exports = {
  chainMaker
};

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
    console.log("!!!!")
     this.result.push(value);
     return this
   },
   removeLink(position) {
    console.log(this.result.length);
    console.log(position);
    if (position > 0 && position < this.result.length) {
     this.result.splice(position-1, 1);
     return this
    }
    else {
      this.result.length = 0;
      return 'You can\'t remove incorrect link!';
      
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
chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2),
console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4));
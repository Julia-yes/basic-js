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
    this.result.push(value)
  },
  removeLink(position) {
    
  },
  reverseChain() {
    this.result.reverse()
  },
  finishChain() {
    return this.result
  }
};

module.exports = {
  chainMaker
};

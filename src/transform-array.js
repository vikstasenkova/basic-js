const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(/* arr */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};

function transform(arr){
  if (!Array.isArray(arr)) return "'arr' parameter must be an instance of the Array!"
  let newArr = arr.slice();
  if(newArr.includes("--discard-next" )){
    let num = newArr.indexOf("--discard-next");
    newArr.splice(num, 2)
  }
  if(newArr.includes("--discard-prev" )){
    let num = newArr.indexOf("--discard-prev");
    newArr.splice(num - 1, 2)
  }
  if(newArr.includes("--double-next" )){
    let num = newArr.indexOf("--double-next");
    newArr.splice(num, 1, newArr[num + 1])
  }
  if(newArr.includes("--double-prev" )){
    let num = newArr.indexOf("--double-prev");
    newArr.splice(num - 1, 1,[num + 1])
  }
  return newArr; 
}
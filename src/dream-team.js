const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(/* members */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};


function createDreamTeam(members){
  let name = "";
  if (Array.isArray(members)){
    let newArr = members.slice().sort();
    newArr.forEach(element => {
      if( typeof(element) === "string"){
        let aaa = element.split("").find((item) => (item) !== " ");
        name = name + aaa.toUpperCase();
      }
    });
  }
  let newName = name.split("").sort().join("")
  return newName;
}




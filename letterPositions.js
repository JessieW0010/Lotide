//copied eqArray and assertArraysEqual function:
// const eqArrays = function(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   } 

//   for (let i = 0; i < array1.length; i ++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }

//   return true;
// }

// const assertArraysEqual = function(arr1, arr2) {

//   if (eqArrays(arr1, arr2)) {  //if the true (two arrays are equal)
//     console.log(`😜😍🍆Arrays are equal!`)
//   } else {
//     console.log(`😡🤮🤢Arrays are NOT equal!`)
//   }

//   return ""
// }

const letterPositions = function(string) {
  const result = {};

  for (let i = 0; i < string.length; i ++) {
    if (!result[string[i]]) {  //if the letter is not in the objet
      result[string[i]] = [i];
    } else {
      result[string[i]].push(i);
    }
  }

  return result;
}

// console.log(assertArraysEqual(letterPositions("hello").e, [1]));
module.exports = letterPositions;
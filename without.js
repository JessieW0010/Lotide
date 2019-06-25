//copied eqArray function:
const eqArrays = function(array1, array2) {

  //if the two arrays are not the same length the assertion fails automatically
  if (array1.length !== array2.length) {
    return false;
  } 

  //if the two arrays are the same length this runs:
  for (let i = 0; i < array1.length; i ++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;

}

const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2)) {  //if the true (two arrays are equal)
    console.log(`😜😍🍆Arrays are equal!`);
  } else {
    console.log(`😡🤮🤢Arrays are NOT equal!`);
  }

}

//function should take in a source array and an itemsToRemove array and return a subset of the source array
//its ok for without to not function correctly when using nested arrays
const without = function(source, itemsToRemove) {

  let returnArr = [];
  
  for (let i = 0; i < source.length; i ++) {
    let removeElem = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        removeElem = true;
      }
    }
    if (removeElem === false) {
      returnArr.push(source[i]);
    }
  }

  return returnArr;

}

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
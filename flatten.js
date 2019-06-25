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

};

//copied
const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2)) {  //if the true (two arrays are equal)
    console.log(`😜😍🍆Arrays are equal!`);
  } else {
    console.log(`😡🤮🤢Arrays are NOT equal!`);
  }

};

const flatten = function(array) {

  let newArr = [];
  
  for (let i = 0; i < array.length; i ++) {
    if (Array.isArray(array[i])) { //if element is an array
      for (let j = 0; j < array[i].length; j ++) {
        newArr.push(array[i][j]);
      }
    } else {
      newArr.push(array[i]);
    }
  }

  return newArr;

}

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]


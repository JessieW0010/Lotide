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

//copied assertArraysEqal function
const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2)) {  //if the true (two arrays are equal)
    console.log(`😜😍🍆Arrays are equal!`)
  } else {
    console.log(`😡🤮🤢Arrays are NOT equal!`)
  }

}

//should return an array with only the middle elements of the provided array. 
//for arrays with one/ two elements there is no middle => return empty array
const middle = function(array) {

  const middleArr = [];

  if (array.length <= 2) {
    console.log(middleArr);
  } else {  

    let middleIndex = Math.ceil(array.length / 2) - 1; //rounds down
    //-1 because JS is a zero based index system

    if (array.length % 2 !== 0) { //array is odd length 
      middleArr.push(array[middleIndex]);
    } else {  //array is even length 
      middleArr.push(array[middleIndex]);
      middleArr.push(array[middleIndex + 1]);
    }
    console.log(middleArr, middleIndex);
  }
}

//test code
middle([1]) // => []
middle([1, 2]) // => []

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

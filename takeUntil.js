const takeUntil = function(array, callback) {
  let arr = [];
  for (let elem of array) {
    if (!callback(elem)) {  
      arr.push(elem);  //when function is not true push
    } else {
      return arr;
    }
  }
}

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i ++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {  //if the true (two arrays are equal)
    console.log(`😜😍🍆Arrays are equal! ${arr1} === ${arr2}`);
  } else {
    console.log(`😡🤮🤢Arrays are NOT equal! ${arr1} !== ${arr2}`);
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
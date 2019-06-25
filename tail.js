const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`😡🤮🤢Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`😜😍🍆Assertion Passed: ${actual} === ${expected}`);
  }
};

const tail = function(array) {
  let tailArray = [];
  for (let i = 1; i < array.length; i ++) {
    tailArray.push(array[i]);
  }
  return tailArray;
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
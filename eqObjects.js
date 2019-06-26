const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`😡🤮🤢Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`😜😍🍆Assertion Passed: ${actual} === ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length === Object.keys(object2).length) {

    for (let property in object1) {
      for (let property2 in object2) {
        if (property === property2) {   //both keys are the same
          if (object1[property] === object2[property]) {  //both values are the same
            return true;
          } else {
            return false;
          }
        }
      }
    }

  } else {
    return false;
  }

};

//primitive values test
// const abc = { a: "1", b: "2", c: "3" };
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true)
// console.log(eqObjects(ab, abc)); // => false

//arrays test
const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true
console.log(eqObjects(cd, cd2)); // => false
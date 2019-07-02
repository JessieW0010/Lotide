// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  //if objects don't have the same number of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    //if key exists in object 2
    if (object2[key]) {
      //if value is an array
      if (Array.isArray(object1[key] && Array.isArray(object2[key])) {

      }
      //if value is an object
      
    } else {
      return false;
    }
  }
};

// module.exports = eqObjects;

//primitive values test
const abc = { a: "1", b: "2", c: "3" };
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true)
console.log(eqObjects(ab, abc)); // => false

//arrays test
const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 4] };
const dc = { d: ["2", 3], c: "1"};
console.log(eqObjects(cd, dc)); // => true
console.log(eqObjects(cd, cd2)); // => false


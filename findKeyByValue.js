const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`😡🤮🤢Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`😜😍🍆Assertion Passed: ${actual} === ${expected}`);
  }
};

//function scans the object and returns the first key which contains the given value, if not key has that value it should return undefined
function findKeyByValue(obj, val) {

  //first break obj into keys and value
  const entries = Object.entries(obj);

  for (const [key, value] of entries) {
    if (val === value) {
      return key;
    }   // else it will automatically return undefined
  }

}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);



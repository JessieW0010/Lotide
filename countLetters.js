//copied assertEquals
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`😡🤮🤢Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`😜😍🍆Assertion Passed: ${actual} === ${expected}`);
  }
};

//returns an object, don't count spaces
function countLetters(string) {
  const letterCount = {};

  for (const letter of string) {
    if (letter !== " ") {
      if (letterCount[letter]) {
        letterCount[letter] += 1;
      } else {
        letterCount[letter] = 1;
      }
    }
  }

  return letterCount;
}


//test 
assertEqual(countLetters("lighthouse in the house")["l"], 1);
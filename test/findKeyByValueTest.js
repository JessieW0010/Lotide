// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const lotide = require("../index");
const assert = require("chai").assert;

describe("#findKeyByValue", () => {
  it("returns the key of the inputted value", () => {
    const bestTVShowsByGenre = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.deepEqual(lotide.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")
  })
})
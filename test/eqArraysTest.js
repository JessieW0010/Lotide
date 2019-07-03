const lotide = require("../index");
const assert = require("chai").assert;

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

describe("#eqArrays", () => {
  it("should return true", () => {
    assert.deepEqual(lotide.eqArrays([1, 2, 3], [1, 2, 3]), true);
  })
})

const lotide = require("../index");
const assert = require("chai").assert;

describe("#flatten", () => {
  it("flattens an inputted array", () => {
    assert.deepEqual(lotide.flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])
  })
})

// console.log(flatten([1, 2, [3, 4], 5, [6]]))

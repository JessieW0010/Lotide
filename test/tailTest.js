const tail = require("../tail");
// const assertEqual = require("../assertEqual");
const assert = require("chai").assert;

describe("#tail", () => {
  it("returns lighthouse and labs", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words), [ 'Lighthouse', 'Labs' ])
    // console.log(`${tail(words)}`);
  })
})

// console.log(tail(words)); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
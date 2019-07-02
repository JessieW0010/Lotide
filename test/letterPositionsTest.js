// assertArraysEqual(letterPositions("hello").e, [1])
const lotide = require("../index");
const assert = require("chai").assert;

describe("#letterPositions", () => {
  it("returns index of 1 for the letter e in hello", () => {
    assert.deepEqual(lotide.letterPositions("hello").e, [1]);
  })
})
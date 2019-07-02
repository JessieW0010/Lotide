// const assertEqual = require("../assertEqual");
const assert = require("chai").assert;
// const head = require("../head");
const lotide = require("../index");


describe("#head", () => {
  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(lotide.head([5,6,7]), 5);
  })
  it("returns hello for head([5,6,7]), 5)", () => {
    assert.strictEqual(lotide.head(["wow", "Hi"]), "wow");
  })
});

//test code:
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(head([5,6,7]), 5), "Hello");
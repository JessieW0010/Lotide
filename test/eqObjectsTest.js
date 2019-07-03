

// //arrays test
// const cd = { c: "1", d: ["2", 3] };
// const cd2 = { c: "1", d: ["2", 4] };
// const dc = { d: ["2", 3], c: "1"};
// console.log(eqObjects(cd, dc)); // => true
// console.log(eqObjects(cd, cd2)); // => false

const lotide = require("../index");
const assert = require("chai").assert;

describe("#eqObjects", () => {
  it("should equal true"), () => {
    //primitive values test
    const abc = { a: "1", b: "2", c: "3" };
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.strictEqual(lotide.eqObjects(ab, ba), true); // => true)
    assert.strictEqual(lotide.eqObjects(ab, abc), false); // => false
  }
})
const lotide = require("../index");
const assert = require("chai").assert;

describe("#countOnly", () => {
  it("should return property Jason with value of 1", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result1 = (lotide.countOnly({ "Jason": true, "Karima": true, "Fang": true }, firstNames));
    // console.log(result1);
    assert.deepEqual(result1["Jason"], 1);
  })
})

//test code
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);


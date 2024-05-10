/**
*There is an array with some numbers. All numbers are equal except for one. Try to find it!
*
*findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
*findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
*It’s guaranteed that array contains at least 3 numbers.
*
*The tests contain some very huge arrays, so think about performance.
*
*This is the first kata in series:
*
*Find the unique number (this kata)
*Find the unique string
*Find The Unique
*/

function findUniq(arr) {
  if (arr[0] === arr[1]) {
    for (let i = 2; i < arr.length; i++) {
      if (arr[0] !== arr[i]) {
        return arr[i];
      }
    }
  } else if (arr[0] === arr[2]) {
    return arr[1];
  } else {
    return arr[0];
  }
}

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Example Tests", () => {
//   it("Tests", () => {
//     assert.strictEqual(findUniq([ 1, 0, 0 ]), 1);
//     assert.strictEqual(findUniq([ 0, 1, 0 ]), 1);
//     assert.strictEqual(findUniq([ 0, 0, 1 ]), 1);
//     assert.strictEqual(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
//     assert.strictEqual(findUniq([ 1, 1, 2, 1, 1 ]), 2);
//     assert.strictEqual(findUniq([ 3, 10, 3, 3, 3 ]), 10);
//   });
// });

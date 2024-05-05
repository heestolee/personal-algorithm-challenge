
/*
*
*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!

*
*/

function createPhoneNumber(numbers){
  /**
  * 1. array를 3,3,4로 나눈다.
  * 2. 특문 넣어서 push해준다.
  */
let copiedArray = [...numbers]
let result = ['('];

for (let i = 0; i < 3; i++) {
  result.push(copiedArray[i])
  if(i === 2) {
    result.push(') ')
  }
}

for (let i = 3; i < 6; i++) {
  result.push(copiedArray[i]);
  if (i === 5) {
    result.push('-')
  }
}

for (let i = 6; i < 10; i++) {
  result.push(copiedArray[i])
}

let phoneNumber = result.join("");

  return phoneNumber;
}

/**
 * [test code]
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Create Phone Number", () => {
  it("Fixed tests", () => {
    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
    assert.strictEqual(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
  });
});
 */

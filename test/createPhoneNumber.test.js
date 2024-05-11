import { expect, describe, it } from "vitest";
import createPhoneNumber from "../lib/createPhoneNumber"

describe("createPhoneNumber", function () {
  const tests = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  ]
  it("Creat Phone Number", function () {
    expect(createPhoneNumber(tests[0])).toBe("(123) 456-7890");
    expect(createPhoneNumber(tests[1])).toBe("(111) 111-1111");
    expect(createPhoneNumber(tests[2])).toBe("(123) 456-7890");
  })
})





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





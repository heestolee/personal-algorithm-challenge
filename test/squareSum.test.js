import { expect, describe, it } from "vitest";
import squareSum from "../lib/squareSum";

describe("squareSum", function () {
  it("should pass basic test", function () {
    expect(squareSum([1, 2])).to.eql(5);
    expect(squareSum([0, 3, 4, 5])).to.eql(50);
    expect(squareSum([])).to.eql(0);
    expect(squareSum([-1, -2])).to.eql(5);
    expect(squareSum([-1, 0, 1])).to.eql(2);
  })
});

describe("Random Tests", function() {
  const squareSol = n => n.reduce((p, c) => p + c * c, 0);
  let arrLen, testArr;

  for (let i = 0; i < 40; i++) {
    arrLen = Math.floor(Math.random() * 9) + 2;
    testArr = [];

    for (let j = 0; j < arrLen; j++) {
        testArr.push(Math.floor(Math.random() * 41) - 20);
    }

    let expected = squareSol(testArr),
        actual = squareSum(testArr.slice());

      it("Testing for [" + testArr + "]", function() {
        expect(actual).to.eql(expected);
    });
  }
});

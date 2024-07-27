import { expect, describe, it } from "vitest";
import betterThanAverage from "../lib/betterThanAverage";

describe("Basic Tests", function () {
  it("should be blah blah", function () {
    expect(betterThanAverage([2, 3], 5)).to.eql(true);
    expect(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)).to.eql(true);
    expect(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69)).to.eql(true);
    expect(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)).to.eql(false);
    expect(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21)).to.eql(false);
  })
});

describe("Random Tests", function() {
  function solution(classPoints, yourPoints) {
    return classPoints.reduce((acc, points) => acc + points - yourPoints, 0) < 0;
  }

  for (let i = 0; i < 40; ++i) {
    let arr = Array.from({length: 50},() => ~~(Math.random() * 100));
    let points = ~~(Math.random() * 100);
    let result = solution(arr, points);
    it(`betterThanAverage(${arr}, ${points}) should return False`, function() {
      expect(betterThanAverage(arr.slice(), points)).to.eql(result);
    });
  }
});
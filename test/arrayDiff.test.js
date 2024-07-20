import { expect, describe, it } from "vitest";
import arrayDiff from "../lib/arrayDiff";

describe("", function () {
  it("should be blah blah", function () {
    expect(arrayDiff([1,2], [1])).to.eql([2]);
    expect(arrayDiff([1,2,2], [1])).to.eql([2,2]);
    expect(arrayDiff([1,2,2], [2])).to.eql([1]);
    expect(arrayDiff([1,2,2], [])).to.eql([1,2,2]);
    expect(arrayDiff([], [1,2])).to.eql([]);
    expect(arrayDiff([1,2,3], [3])).to.eql([1,2]);
  })
});

describe("Random tests", () =>  {
  const array_diff_sol = (a, b) => a.filter(e => !b.includes(e));
  function shuffle(arr){
      for (let cIdx = arr.length - 1; cIdx > 0; cIdx--){
          let rIdx = Math.floor(Math.random() * (cIdx + 1) );
          [arr[cIdx], arr[rIdx]] = [arr[rIdx], arr[cIdx]]
      }
      return arr
  }
  const generateRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  for (let i = 0; i < 40; i++) {
      let a, b, expected, aLength, bLength;
      a = [];
      b = [];
      aLength = generateRandomInt(0,20);
      bLength = generateRandomInt(0,aLength);
      for (let j = 0; j < aLength; j++)
          a.push(generateRandomInt(0,40) - 20);
      b = shuffle(a).slice(0, generateRandomInt(0, aLength));
      expected = array_diff_sol(a,b);
      it("Testing for arrayDiff([" + a + "],[" + b + "])", () => {
          expect(arrayDiff(a,b)).to.eql(expected);
        });
  }
});
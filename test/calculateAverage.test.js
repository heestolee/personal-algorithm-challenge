import { expect, describe, it } from "vitest";
import findAverage from "../lib/calculateAverage";

describe("findAverage", function () {
  it("should be blah blah", function () {
    expect(findAverage([1,1,1])).to.eql(1);
    expect(findAverage([1,2,3])).to.eql(2);
    expect(findAverage([1,2,3,4])).to.eql(2.5);
  })});

  describe("Random tests", () => {

    function randint(min, max){
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for(let i = 0; i < 100; i++){
      let arr = Array.from({length: randint(0, 15)}, (_, i) => randint(1, 100))
      let expected = !arr.length ? 0 : arr.reduce((a, b) => a + b, 0) / arr.length
      it(`findAverage(${JSON.stringify(arr)}) should equal ${expected}`, () => {
        expect(findAverage(arr)).to.eql(expected);
      });
    }
  })
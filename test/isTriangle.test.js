import { expect, describe, it } from "vitest";
import isTriangle from "../lib/isTriangle";

describe("isTriangle Random tests", () => {
  function randint(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function sol(a, b, c){
    return a+b > c && b+c >a && a+c > b
  }

  for(let i = 0; i < 100; i++){
    let arr = Array.from({length: 3}, (_, i) => randint(-2, 10))
    let expected = sol(...arr.slice())
    it(`isTriangle(${arr.join(",")}) should equal ${expected}`, () => {
      // assert.strictEqual(isTriangle(...arr.slice()), expected);
      expect(isTriangle(...arr.slice())).to.eql(expected);
    });
  }
});

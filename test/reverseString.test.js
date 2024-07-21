import { expect, describe, it } from "vitest";
import solution from "../lib/reverseString";

describe("", function () {
  it("should be blah blah", function () {
    expect(solution("world")).to.eql("dlrow");
    expect(solution("hello")).to.eql("olleh");
    expect(solution("")).to.eql("");
    expect(solution("h")).to.eql("h");
  })
});

describe("Random tests", () => {

  const s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ   "

  function randint(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  it("Testing for 100 random tests", () => {
    for(let i = 0; i < 100; i++){
      let word = Array.from({length: randint(0, 20)}, (_, i) => s[randint(0, s.length - 1)]).join``
      let expected = [...word].reverse().join``
      expect(solution(word)).to.eql(expected);
    }
  })
})
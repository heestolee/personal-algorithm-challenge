import { expect, describe, it } from "vitest";
import doubleChar from "../lib/doubleChar";

describe("doubleChar", function () {
  it("should be pass basic test", function () {
    expect(doubleChar("abcd")).to.eql("aabbccdd");
    expect(doubleChar("Adidas")).to.eql("AAddiiddaass");
    expect(doubleChar("1337")).to.eql("11333377");
    expect(doubleChar("illuminati")).to.eql("iilllluummiinnaattii");
    expect(doubleChar("123456")).to.eql("112233445566");
    expect(doubleChar("%^&*(")).to.eql("%%^^&&**((");
  });

  it("works for random strings", function() {
    const randint = (a, b) => ~~(Math.random() * (b - a + 1)) + a
    const randstr = (l) =>
      [...Array(l)].map(_=>String.fromCharCode(randint(65, 127))).join("")

    const solution = (str) => str.split("").map((c) => c + c).join("");

    for (let i = 0; i < 40; ++i) {
      let str = randstr(randint(5, 20));
      // Test.assertEquals(doubleChar(str), solution(str), `Failed when str='${str}'`);
      expect(doubleChar(str)).to.eql(solution(str));
    }
  });
});

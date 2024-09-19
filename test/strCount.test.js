import { expect, describe, it } from "vitest";
import strCount from "../lib/strCount";

describe("strCount", function () {
  it("should be able to handle basic tests", function () {
    expect(strCount("Hello", "o")).to.eql(1);
    expect(strCount("Hello", "l")).to.eql(2);
    expect(strCount("abcedfghijklmnopqrstuvwxyz", "z")).to.eql(1);
    expect(strCount("ww234n", "z")).to.eql(0);
    expect(strCount("", "k")).to.eql(0);
  });

  it("should be able to handle random tests",function(){

    const letters = "abcdefghijklz".split("");

    function genCount() {
      let letter = letters[Math.random() * letters.length | 0];
      let count = 0;
      let str = "";
      let length = Math.random() * 300 + 20 | 0;
      for(let i = 0; i < length; ++i) {
        let l = letters[Math.random() * letters.length | 0];
        str += l;
        count += l == letter;
      }
      return [str, letter, count];
    }

    function genZero() {
      let letter = letters[Math.random() * letters.length | 0];
      let str = genCount()[0].split("").filter(l => l != letter).join("");
      return [str, letter, 0];
    }

    let cases = Array.from({length: 100}, (_,i)=>[genCount, genZero][i%2]()).
      map(e => [e, Math.random()]).sort((e1,e2)=>e1[1]-e2[1]).map(e=>e[0]);

    for(let[str, letter, expected] of cases){
      // doTest(str, letter, expected);
      expect(strCount(str, letter)).to.eql(expected);
    }
  });
});

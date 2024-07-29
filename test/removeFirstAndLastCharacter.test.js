import { expect, describe, it } from "vitest";
import removeChar from "../lib/removeFirstAndLastCharacter";

describe("removeChar", function () {
  it("basic test", function () {
    expect(removeChar("eloquent")).to.eql("loquen");
    expect(removeChar("country")).to.eql("ountr");
    expect(removeChar("person")).to.eql("erso");
    expect(removeChar("place")).to.eql("lac");
    expect(removeChar("ooopsss")).to.eql("oopss");
  })
});

describe("Random Tests for removeChar", () => {
  function testSolution(str){
    let result = "";
      return result = str.substring(1, str.length-1);
  }

  it("Testing for 100 random tests", () => {
    for(let i = 0; i < 100; i++){
      let possible = "abcdefghijklmnopqrstuvwxyz0123456789", text = "";
       for(let k = 0; k < ~~(Math.random() * 10) + 2; k++){
          text += possible.charAt(~~(Math.random() * possible.length));
      }
      expect(removeChar(text)).to.eql(testSolution(text));
    }
  });
});

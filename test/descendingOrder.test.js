import { expect, describe, it } from "vitest";
import descendingOrder from "../lib/descendingOrder";

describe("descendingOrder", function () {
  it("should be pass basic test", function () {
    expect(descendingOrder(0)).to.eql(0);
    expect(descendingOrder(1)).to.eql(1);
    expect(descendingOrder(111)).to.eql(111);
    expect(descendingOrder(15)).to.eql(51);
    expect(descendingOrder(1021)).to.eql(2110);
    expect(descendingOrder(123456789)).to.eql(987654321);
  });
});

describe("descendingOrder Random tests", () => {
  function randint(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  for(let i = 0; i < 100; i++){
    let num = randint(0, 10**randint(1, 10))
    let expected = +[...""+num].sort().reverse().join``
    it(`descendingOrder(${num}) should equal ${expected}`, () => {
      // assert.strictEqual(descendingOrder(num), expected);
      expect(descendingOrder(num)).to.eql(expected);
    });
  }
});

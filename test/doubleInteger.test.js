import { expect, describe, it } from "vitest";
import doubleInteger from "../lib/doubleInteger";

describe("doubleInteger", function () {
  it("fixed tests", function () {
    expect(doubleInteger(2)).to.eql(4);
    expect(doubleInteger(4)).to.eql(8);
    expect(doubleInteger(-10)).to.eql(-20);
    expect(doubleInteger(0)).to.eql(0);
    expect(doubleInteger(100)).to.eql(200);
  })

  it( "Random tests", ()=>{
    for ( let i=100; i--; ) {
      const n = Math.floor( Math.random() * 1999 ) - 999 ;
      expect(doubleInteger(n)).to.eql(n + n);
    }
  });
});

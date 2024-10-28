import { expect, describe, it } from "vitest";
import lovefunc from "../lib/oppositesAttract";

describe("oppositeAttract", function () {
  it("should be pass basic test", function () {
    expect(lovefunc(1, 4)).to.eql(true);
    expect(lovefunc(2, 2)).to.eql(false);
    expect(lovefunc(0, 1)).to.eql(true);
    expect(lovefunc(0, 0)).to.eql(false);
  });

  it("should work for random numbers", function(){
    for(let i = 0; i < 100; ++i){
      let flower1 = (Math.random() * 1000) | 0;
      let flower2 = (Math.random() * 1000) | 0;
      expect(lovefunc(flower1, flower2)).to.eql((flower1 + flower2) % 2 === 1);
    }
  });
});

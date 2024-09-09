import { expect, describe, it } from "vitest";
import findSmallestInt from "../lib/findSmallestInt";

describe("findSmallestInt", function () {
  it("should be pass basic tests", function () {
    expect(findSmallestInt([78,56,232,12,8])).to.eql(8);
    expect(findSmallestInt([78,56,232,12,18])).to.eql(12);
    expect(findSmallestInt([78,56,232,412,228])).to.eql(56);
    expect(findSmallestInt([78,56,232,12,0])).to.eql(0);
    expect(findSmallestInt([1,56,232,12,8])).to.eql(1);
  });

  it("Random Tests", () => {

    function solv(arr) {
      let n = arr.sort((a,b)=>a-b)[0];
      return {ans:n,desc:`findSmallestInt([${arr.join(",")}])`};
    }

    for(let i=0;i<100;i++){
      let count = Math.floor(Math.random()*100)+100;
      let test = [];
      for(let x=0;x<count;x++){
        test.push(Math.floor(Math.random()*100000000));
      }
      let ans = solv(test.slice());
      expect(findSmallestInt(test)).to.eql(ans.ans);
    }
  });
});

import { expect, describe, it } from "vitest";
import countBy from "../lib/countByX";

describe("countByX", function () {
  it("should be pass basic test", function () {
    expect(countBy(1, 10)).to.eql([1,2,3,4,5,6,7,8,9,10]);
    expect(countBy(2, 5)).to.eql([2,4,6,8,10]);
    expect(countBy(3, 7)).to.eql([3,6,9,12,15,18,21]);
    expect(countBy(50, 5)).to.eql([50,100,150,200,250]);
    expect(countBy(100, 6)).to.eql([100,200,300,400,500,600]);
  });

  it("Random Tests",() => {

    function randint(a,b){return Math.floor(Math.random()*(b-a)+a);}

    function countSol(x, n) {
        let z = [];
        for (let i = 1; i <= n; i++) {
            z.push(x * i);
        }
        return z;
    }

    for (let k=0;k<20;k++){
      let x=randint(1, 100);
      let n=randint(1, 20);
      expect(countBy(x, n)).to.eql(countSol(x, n));
    }
  });
});

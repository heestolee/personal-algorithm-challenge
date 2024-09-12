import { expect, describe, it } from "vitest";
import sumArray from "../lib/sumWithoutHighestAndLowestNumber";

describe("sumWithoutHighestAndLowestNumber", function () {
  it("should be pass basic test", function () {
    expect(sumArray(null)).to.eql(0);
    expect(sumArray([])).to.eql(0);
    expect(sumArray([3])).to.eql(0);
    expect(sumArray([3, 5])).to.eql(0);
    expect(sumArray([ 6, 2, 1, 8, 10 ])).to.eql(16);
    expect(sumArray([ 0, 1, 6, 10, 10 ])).to.eql(17);
    expect(sumArray([ -6, -20, -1, -10, -12 ])).to.eql(-28);
    expect(sumArray([ -6, 20, -1, 10, -12 ])).to.eql(3);
  });

  it("random tests", ()=>{
    const rnd = (m,n=0) => Math.random() * (n-m) + m | 0 ;
    const rndMaybeList = size => rnd(5) ? Array.from( { length: rnd(size) }, () => rnd(-size,size) ) : null ;
    const refSumArray = xs => xs?.length > 1 ? xs.reduce( (x,y) => y+x , 0 ) - Math.min(...xs) - Math.max(...xs) : 0 ;
    for ( let i=1; i<100; i++ ) {
      let xs = rndMaybeList(i);
      const expected = refSumArray(xs);
      expect(sumArray(xs?.slice())).to.eql(expected);
    }
  });
});

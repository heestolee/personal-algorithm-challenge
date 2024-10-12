import { expect, describe, it } from "vitest";
import sumMix from "../lib/sumMixedArray";

describe("sumMixedArray", function () {
  it("should be pass basic test", function () {
    expect(sumMix([9, 3, '7', '3'])).to.eql(22);
    expect(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])).to.eql(42);
    expect(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])).to.eql(41);
    expect(sumMix(['1', '5', '8', 8, 9, 9, 2, '3'])).to.eql(45);
    expect(sumMix([8, 0, 0, 8, 5, 7, 2, 3, 7, 8, 6, 7])).to.eql(61);
  });
});

describe("Random tests",() =>{
  const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;

  function mysumMix(x){return x.map(x=>Number(x)).reduce((a,b)=>a+b);}

  let names=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", 1, 2, 3, 4, 5, 6, 7, 8, 9];

  it("Testing for 100 random tests", () => {
    for (let i=0;i<100;i++){
      let x=[], len=randint(1,30);
      for (let k=0;k<len;k++) x.push(names[randint(0,names.length-1)]);
      // assert.strictEqual(sumMix(x.slice()),mysumMix(x.slice()), `Testing for ${x}`);
      expect(sumMix(x.slice())).to.eql(mysumMix(x.slice()));
      }
  });
});

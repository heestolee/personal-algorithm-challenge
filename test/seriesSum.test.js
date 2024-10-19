import { expect, describe, it } from "vitest";
import seriesSum from "../lib/seriesSum";

describe("seriesSum", function () {
  it("should be pass basic test", function () {
    expect(seriesSum(1)).to.eql("1.00");
    expect(seriesSum(2)).to.eql("1.25");
    expect(seriesSum(3)).to.eql("1.39");
    expect(seriesSum(4)).to.eql("1.49");
    expect(seriesSum(5)).to.eql("1.57");
    expect(seriesSum(6)).to.eql("1.63");
    expect(seriesSum(7)).to.eql("1.68");
    expect(seriesSum(8)).to.eql("1.73");
    expect(seriesSum(9)).to.eql("1.77");
    expect(seriesSum(15)).to.eql("1.94");
    expect(seriesSum(39)).to.eql("2.26");
    expect(seriesSum(58)).to.eql("2.40");
    expect(seriesSum(0)).to.eql("0.00");
  });

  it("Random tests", () => {
    const randInt = (min, max) => Math.floor(min + Math.random() * max);

    function refsol(n) {
      let sum = 0;
      for (let i = 1; i <= n; ++i)
        sum += 1 / (3 * i - 2);
      return sum.toFixed(2);
    }

    for(let i = 0; i < 100; i++) {
      let n = randInt(0, 250);
      expect(seriesSum(n)).to.eql(refsol(n));
    }
  });
});

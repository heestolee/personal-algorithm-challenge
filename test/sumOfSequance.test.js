import { expect, describe, it } from "vitest";
import { sequenceSum } from "../lib/sumOfSequance";

describe("sumOfSequance", function () {
  it("should be pass basic test", function () {
    expect(sequenceSum(2, 6, 2)).to.eql(12);
    expect(sequenceSum(1, 5, 1)).to.eql(15);
    expect(sequenceSum(1, 5, 3)).to.eql(5);
    expect(sequenceSum(0, 15, 3)).to.eql(45);
    expect(sequenceSum(16, 15, 3)).to.eql(0);
    expect(sequenceSum(2, 24, 22)).to.eql(26);
  })
});

describe("Random tests", () => {
  const checkSequenceSum = (begin, end, step) => {
    if (begin > end) {
      return 0;
    }
    return begin + sequenceSum(begin + step, end, step);
  };

  function returnRand() {
    return Math.round(Math.random() * 1000);
  }

  function returnStep() {
    return Math.round(Math.random() * 100);
  }

  it("Testing for 50 random tests", () => {
    for (let i = 0; i < 50; i++) {
      let bF = returnRand();
      let eF = returnRand();
      let sF = returnStep();
      expect(sequenceSum(bF, eF, sF)).to.eql(checkSequenceSum(bF, eF, sF));
    }
  });
});
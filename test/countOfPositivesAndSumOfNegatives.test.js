import { expect, describe, it } from "vitest";
import countPositivesSumNegatives from "../lib/countOfPositivesAndSumOfNegatives";

describe("countPositivesSumNegatives", function () {
  it("should pass basic case", function () {
    expect(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])).to.eql([10, -65]);
    expect(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])).to.eql([8, -50]);
    expect(countPositivesSumNegatives(null)).to.eql([]);
    expect(countPositivesSumNegatives([])).to.eql([]);
  })
});

import { expect, describe, it } from "vitest";
import finalGrade from "../lib/finalGrade";

describe("finalGrade", function () {
  it("should be pass basic test", function () {
    expect(finalGrade(100, 12)).to.eql(100);
    expect(finalGrade(99, 0)).to.eql(100);
    expect(finalGrade(10, 15)).to.eql(100);
    expect(finalGrade(85, 5)).to.eql(90);
    expect(finalGrade(55, 3)).to.eql(75);
    expect(finalGrade(55, 0)).to.eql(0);
    expect(finalGrade(20, 2)).to.eql(0);
  });
});

import { expect, describe, it } from "vitest";
import getDivisorsCount from "../lib/getDivisorsCount";

describe("getDivisorsCount", function () {
  it("should be pass basic test", function () {
    expect(getDivisorsCount(1)).to.eql(1);
    expect(getDivisorsCount(10)).to.eql(4);
    expect(getDivisorsCount(11)).to.eql(2);
    expect(getDivisorsCount(54)).to.eql(8);
  });
});

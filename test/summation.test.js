import { expect, describe, it } from "vitest";
import summation from "../lib/summation";

describe("summation", function () {
  it("should be blah blah", function () {
    expect(summation(1)).to.eql(1);
    expect(summation(2)).to.eql(3);
    expect(summation(8)).to.eql(36);
  })
});

import { expect, describe, it } from "vitest";
import invert from "../lib/invertValue";

describe("", function () {
  it("should be blah blah", function () {
    expect(invert([1,2,3,4,5])).to.eql([-1,-2,-3,-4,-5]);
    expect(invert([1,-2,3,-4,5])).to.eql([-1, 2, -3, 4, -5]);
    expect(invert([])).to.eql([]);
  })
});

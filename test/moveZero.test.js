import { expect, describe, it } from "vitest";
import moveZero from "../lib/moveZeros"

describe("moveZero", function () {
  it("should be blah blah", function () {
    expect(moveZero([1,2,0,1,0,1,0,3,0,1])).to.eql([1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
  })
});

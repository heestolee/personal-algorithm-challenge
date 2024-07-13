import { expect, describe, it } from "vitest";
import findEvenIndex from "../lib/equalSideOfAnArray";

describe("", function () {
  it("should be blah blah", function () {
    expect(findEvenIndex([1,2,3,4,3,2,1])).to.eql(3);
    expect(findEvenIndex([1,100,50,-51,1,1])).to.eql(1);
    expect(findEvenIndex([1,2,3,4,5,6])).to.eql(-1);
    expect(findEvenIndex([20,10,30,10,10,15,35])).to.eql(3);
  })
});

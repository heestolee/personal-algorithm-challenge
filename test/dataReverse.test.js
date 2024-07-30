import { expect, describe, it } from "vitest";
import dataReverse from "../lib/dataReverse";

describe("dataReverse", function () {
  it("should be blah blah", function () {
    expect(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0])).to.eql([1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]);
    expect(dataReverse([0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1])).to.eql([0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0]);
  })
});

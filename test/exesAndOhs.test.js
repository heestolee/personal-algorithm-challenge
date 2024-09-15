import { expect, describe, it } from "vitest";
import XO from "../lib/exexAndOhs";

describe("", function () {
  it("should be blah blah", function () {
    expect(XO("ooxx")).to.eql(true);
    expect(XO("xooxx")).to.eql(false);
    expect(XO("ooxXm")).to.eql(true);
    expect(XO("zpzpzpp")).to.eql(true);
    expect(XO("zzoo")).to.eql(false);
  })
});

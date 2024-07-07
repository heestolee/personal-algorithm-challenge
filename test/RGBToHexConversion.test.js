import { expect, describe, it } from "vitest";
import rgb from "../lib/RGBToHexConversion";

describe("", function () {
  it("should be blah blah", function () {
    expect(rgb(0, 0, 0)).to.eql("000000");
    expect(rgb(0, 0, -20)).to.eql("000000");
    expect(rgb(300, 255, 255)).to.eql("FFFFFF");
    expect(rgb(173, 255, 47)).to.eql("ADFF2F");
  })
});

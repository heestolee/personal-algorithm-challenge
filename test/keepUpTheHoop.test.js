import { expect, describe, it } from "vitest";
import hoopCount from "../lib/keepUpTheHoop";

describe("keepUpTheHoop", function () {
  it("should be pass simple test", function () {
    expect(hoopCount(1)).to.eql("Keep at it until you get it");
    expect(hoopCount(3)).to.eql("Keep at it until you get it");
    expect(hoopCount(5)).to.eql("Keep at it until you get it");
    expect(hoopCount(7)).to.eql("Keep at it until you get it");
    expect(hoopCount(9)).to.eql("Keep at it until you get it");
    expect(hoopCount(10)).to.eql("Great, now move on to tricks");
    expect(hoopCount(11)).to.eql("Great, now move on to tricks");
    expect(hoopCount(13)).to.eql("Great, now move on to tricks");
    expect(hoopCount(15)).to.eql("Great, now move on to tricks");
    expect(hoopCount(100)).to.eql("Great, now move on to tricks");
  });
});

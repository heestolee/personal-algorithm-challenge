import { expect, describe, it } from "vitest";
import inArray from "../lib/whichAreIn";

describe("whichAreIn", function () {
  it("should be blah blah", function () {
    expect(inArray(["xyz", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"])).to.eql(["live", "strong"]);
    expect(inArray(["live", "strong", "arp"], ["lively", "alive", "harp", "sharp", "armstrong"])).to.eql(["arp", "live", "strong"]);
    expect(inArray(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"])).to.eql([]);
  })
});

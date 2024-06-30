import { expect, describe, it } from "vitest";
import parse from "../lib/makeTheDeadfishSwim"

describe("makeTheDeadfishSwim", function () {
  it("should be blah blah", function () {
    expect(parse("iiisdoso")).to.eql([8, 64]);
    expect(parse("iiisxxxdoso")).to.eql([8, 64]);
  })
});

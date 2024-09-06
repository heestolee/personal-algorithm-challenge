import { expect, describe, it } from "vitest";
import booleanToString from "../lib/booleanToString";

describe("", function () {
  it("should be blah blah", function () {
    expect(booleanToString(true)).to.eql("true");
    expect(booleanToString(false)).to.eql("false");
  })
});

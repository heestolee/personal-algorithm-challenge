import { expect, describe, it } from "vitest";
import numberToString from "../lib/numberToString";

describe("numberToString", function () {
  it("should be pass basic test", function () {
    expect(numberToString(67)).to.eql("67");
    expect(numberToString(79585)).to.eql("79585");
    expect(numberToString(1 + 2)).to.eql("3");
    expect(numberToString(1 - 2)).to.eql("-1");
  })
});

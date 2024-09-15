import { expect, describe, it } from "vitest";
import powersOfTwo from "../lib/powersOfTwo";

describe("powersOfTwo", function () {
  it("should be pass basic test", function () {
    expect(powersOfTwo(0)).to.eql([1]);
    expect(powersOfTwo(1)).to.eql([1, 2]);
    expect(powersOfTwo(4)).to.eql([1, 2, 4, 8, 16]);
  })
});

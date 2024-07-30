import { expect, describe, it } from "vitest";
import sumOfDigits from "../lib/sumOfDigits"

describe("sumOfDigits", function () {
  it("should be blah blah", function () {
    expect(sumOfDigits(16)).to.eql(7);
    expect(sumOfDigits(456)).to.eql(6);
  })
});

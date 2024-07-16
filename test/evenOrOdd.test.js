import { expect, describe, it } from "vitest";
import evenOrOdd from "../lib/evenOrOdd";

describe("", function () {
  it("should be blah blah", function () {
    expect(evenOrOdd(2)).to.eql("Even");
    expect(evenOrOdd(7)).to.eql("Odd");
    expect(evenOrOdd(-42)).to.eql("Even");
    expect(evenOrOdd(-7)).to.eql("Odd");
    expect(evenOrOdd(0)).to.eql("Even");
  })
});

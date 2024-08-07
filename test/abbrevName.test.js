import { expect, describe, it } from "vitest";
import abbrevName from "../lib/abbrevName";

describe("", function () {
  it("should be blah blah", function () {
    expect(abbrevName("Sam Harris")).to.eql("S.H");
    expect(abbrevName("Patrick Feenan")).to.eql("P.F");
    expect(abbrevName("Evan Cole")).to.eql("E.C");
    expect(abbrevName("P Favuzzi")).to.eql("P.F");
    expect(abbrevName("David Mendieta")).to.eql("D.M");

    expect(abbrevName("george clooney")).to.eql("G.C");
    expect(abbrevName("marky mark")).to.eql("M.M");
    expect(abbrevName("eliza doolittle")).to.eql("E.D");
    expect(abbrevName("reese witherspoon")).to.eql("R.W");
  })
});

import { expect, describe, it } from "vitest";
import pigIt from "../lib/simplePigLatin";

describe("", function () {
  it("should be blah blah", function () {
    expect(pigIt('Pig latin is cool')).to.eql('igPay atinlay siay oolcay');
    expect(pigIt('This is my string')).to.eql('hisTay siay ymay tringsay');
  })
});

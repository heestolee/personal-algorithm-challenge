import { expect, describe, it } from "vitest";
import isPangram from "../lib/isPangram"

describe("isPangram", function () {
  it("should be blah blah", function () {
    expect(isPangram("The quick brown fox jumps over the lazy dog.")).to.eql(true);
    expect(isPangram("This is not a pangram.")).to.eql(false);
  })
});

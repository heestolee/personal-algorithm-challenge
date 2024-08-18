import { expect, describe, it } from "vitest";
import reverseWords from "../lib/reverseWords";

describe("", function () {
  it("should be blah blah", function () {
    expect(reverseWords('The quick brown fox jumps over the lazy dog.')).to.eql("ehT kciuq nworb xof spmuj revo eht yzal .god");
    expect(reverseWords('apple')).to.eql("elppa");
    expect(reverseWords('a b c d')).to.eql('a b c d');
    expect(reverseWords('double  spaced  words')).to.eql('elbuod  decaps  sdrow');
    expect(reverseWords('stressed desserts')).to.eql('desserts stressed');
    expect(reverseWords('hello hello')).to.eql('olleh olleh');
  })
});

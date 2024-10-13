import { expect, describe, it } from "vitest";
import reverseSeq from "../lib/reverseSequence";

describe("reverseSequence", function () {
  it("Sample Test", function() {
    expect(reverseSeq(5)).to.eql([5, 4, 3, 2, 1]);
  });

  it("Basic Tests", function() {
    expect(reverseSeq(6)).to.eql([6, 5, 4, 3, 2, 1]);
    expect(reverseSeq(100)).to.eql(new Array(100).fill(0).map((_, i) => 100 - i));
    expect(reverseSeq(10000)).to.eql(new Array(10000).fill(0).map((_, i) => 10000 - i));
  });

  it("Random Tests", function() {
    for (let i = 0; i < 100; ++i) {
      let n = ~~(Math.random() * 99 + 1);
      expect(reverseSeq(n)).to.eql(new Array(n).fill(n).map((_, i) => n - i));
    }
  });
});

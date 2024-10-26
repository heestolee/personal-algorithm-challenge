import { expect, describe, it } from "vitest";
import reverseList from "../lib/reverseList";

describe("reverseList", function () {
  it("should be pass basic test", function () {
    expect(reverseList([1,2,3,4])).to.eql([4,3,2,1]);
    expect(reverseList([3,1,5,4])).to.eql([4,5,1,3]);
    expect(reverseList([3,6,9,2])).to.eql([2,9,6,3]);
    expect(reverseList([1])).to.eql([1]);
  });

  it("should reverse some random integer arrays", function() {
    for (let i = 0; i < 100; ++i) {
      const test = new Array(10).fill(0).map(_ => ~~(Math.random() * 100));
      expect(reverseList(test.slice())).to.eql(test.reverse());
    }
  });
});

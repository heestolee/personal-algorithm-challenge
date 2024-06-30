import { expect, describe, it } from "vitest";
import findUniq from "../lib/findUniq";

describe("findUniq", function () {
  it("should be blah blah", function () {
    expect(findUniq([ 1, 0, 0 ])).to.eql(1);
    expect(findUniq([ 0, 1, 0 ])).to.eql(1);
    expect(findUniq([ 0, 0, 1 ])).to.eql(1);
    expect(findUniq([ 1, 1, 1, 2, 1, 1 ])).to.eql(2);
    expect(findUniq([ 1, 1, 2, 1, 1 ])).to.eql(2);
    expect(findUniq([ 3, 10, 3, 3, 3 ])).to.eql(10);
  })
});

//     assert.strictEqual(findUniq(), 1);
//     assert.strictEqual(findUniq(), 1);
//     assert.strictEqual(findUniq(), 1);
//     assert.strictEqual(findUniq(]), 2);
//     assert.strictEqual(findUniq(), 2);
//     assert.strictEqual(findUniq), 10);
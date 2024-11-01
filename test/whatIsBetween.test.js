import { expect, describe, it } from "vitest";
import between from "../lib/whatIsBetween";

const sol = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => i + a);

describe("whatIsBetween", function () {
  it("should be pass basic test", function () {
    expect(between(1, 4)).to.eql([1, 2, 3, 4]);
    expect(between(-2, 2)).to.eql([-2, -1, 0, 1, 2]);
    expect(between(-10, 10)).to.eql(sol(-10, 10));
    expect(between(5, 100)).to.eql(sol(5, 100));
  });
});

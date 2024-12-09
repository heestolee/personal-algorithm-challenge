import { expect, describe, it } from "vitest";
import makeNegative from "../lib/returnNegative";

describe("returnNegative", function () {
  it("should pass basic tests", function () {
    expect(makeNegative(42)).to.eql(-42);
    expect(makeNegative(-9)).to.eql(-9);
    expect(makeNegative(1)).to.eql(-1);
    expect(makeNegative(-1)).to.eql(-1);
    expect(makeNegative(0.12)).to.eql(-0.12);
    expect(makeNegative(0.00001)).to.eql(-0.00001);
    expect(makeNegative(-0.00001)).to.eql(-0.00001);
  });

  it("should pass random positive tests", function () {
    var rnd = Math.floor(Math.random() * 101);
    expect(makeNegative(rnd)).to.eql(-rnd);
  });

  it("should pass random negative tests", function () {
    var rnd = -Math.floor(Math.random() * 101);
    expect(makeNegative(rnd)).to.eql(rnd);
  });
});

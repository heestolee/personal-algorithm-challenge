import { expect, describe, it } from "vitest";
import { toJadenCase } from "../lib/jadenCasingString";

describe("toJadenCase", function () {
  it("should be blah blah", function () {
    var str = "How can mirrors be real if our eyes aren't real";
    expect(str.toJadenCase()).to.eql("How Can Mirrors Be Real If Our Eyes Aren't Real");
  })
});

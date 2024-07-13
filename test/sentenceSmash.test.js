import { expect, describe, it } from "vitest";
import smash from "../lib/sentenceSmash";

describe("", function () {
  it("should be blah blah", function () {
    expect(smash(["hello", "world"])).to.eql("hello world");
    expect(smash(["hello", "amazing", "world"])).to.eql("hello amazing world");
    expect(smash(["this", "is", "a", "really", "long", "sentence"])).to.eql("this is a really long sentence");
  })
});

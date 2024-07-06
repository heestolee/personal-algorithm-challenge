import { expect, describe, it } from "vitest";
import sumStrings from "../lib/sumStringsAsNumbers";

describe("", function () {
  it("should be blah blah", function () {
    expect(sumStrings("123","456")).to.eql("579");
    expect(sumStrings("712569312664357328695151392", "8100824045303269669937")).to.eql("712577413488402631964821329");
  })
});

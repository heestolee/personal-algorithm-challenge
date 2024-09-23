import { expect, describe, it } from "vitest";
import isUpperCase from "../lib/isUpperCase";

describe("", function () {
  it("should be pass basic test", function () {
    expect("c".isUpperCase()).to.eql(false);
    expect("C".isUpperCase()).to.eql(true);
    expect("hello I AM DONALD".isUpperCase()).to.eql(false);
    expect("HELLO I AM DONALD".isUpperCase()).to.eql(true);
    expect("ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase()).to.eql(false);
    expect("ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase()).to.eql(true);
  })
});

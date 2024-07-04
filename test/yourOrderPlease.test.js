import { expect, describe, it } from "vitest";
import order from "../lib/yourOrderPlease";

describe("yourOrderPlease", function () {
  it("should be blah blah", function () {
    expect(order("is2 Thi1s T4est 3a")).to.eql("Thi1s is2 3a T4est");
    expect(order("4of Fo1r pe6ople g3ood th5e the2")).to.eql("Fo1r the2 g3ood 4of th5e pe6ople");
    expect("").to.eql("");
  })
});

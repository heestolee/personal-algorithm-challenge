import { expect, describe, it } from "vitest";
import basicOp from "../lib/basicOp";

describe("basicOp", function () {
  it("should be pass basic test", function () {
    expect(basicOp("+", 4, 7)).to.eql(11);
    expect(basicOp("-", 15, 18)).to.eql(-3);
    expect(basicOp("*", 5, 5)).to.eql(25);
    expect(basicOp("/", 49, 7)).to.eql(7);
  });
});

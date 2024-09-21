import { expect, describe, it } from "vitest";
import getMiddle from "../lib/getMiddle";

describe("getMiddle", function () {
  it("should be pass basic test", function () {
    expect(getMiddle("test")).to.eql("es");
    expect(getMiddle("testing")).to.eql("t");
    expect(getMiddle("middle")).to.eql("dd");
    expect(getMiddle("A")).to.eql("A");
  });
});

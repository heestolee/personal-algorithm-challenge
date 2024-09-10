import { expect, describe, it } from "vitest";
import past from "../lib/timeToMs";

describe("timeToMs", function () {
  it("should be pass basic test", function () {
    expect(past(0, 1, 1)).to.eql(61000);
    expect(past(1, 1, 1)).to.eql(3661000);
    expect(past(0, 0, 0)).to.eql(0);
    expect(past(1, 0, 1)).to.eql(3601000);
    expect(past(1, 0, 0)).to.eql(3600000);
  })
});

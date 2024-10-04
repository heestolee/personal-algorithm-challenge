import { expect, describe, it } from "vitest";
import setAlarm from "../lib/setAlarm";

describe("setAlarm", function () {
  it("should be pass basic test", function () {
    expect(setAlarm(true, true)).to.eql(false);
    expect(setAlarm(true, false)).to.eql(true);
    expect(setAlarm(false, true)).to.eql(false);
    expect(setAlarm(false, false)).to.eql(false);
  })
});

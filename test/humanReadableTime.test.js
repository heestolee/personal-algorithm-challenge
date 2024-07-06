import { expect, describe, it } from "vitest";
import humanReadableTime from "../lib/humanReadableTime";

describe("humanReadableTime", function () {
  it("should be blah blah", function () {
    expect(humanReadableTime(0)).to.eql('00:00:00');
    expect(humanReadableTime(59)).to.eql('00:00:59');
    expect(humanReadableTime(60)).to.eql('00:01:00');
    expect(humanReadableTime(90)).to.eql('00:01:30');
    expect(humanReadableTime(3599)).to.eql('00:59:59');
    expect(humanReadableTime(3600)).to.eql('01:00:00');
    expect(humanReadableTime(45296)).to.eql('12:34:56');
    expect(humanReadableTime(86399)).to.eql('23:59:59');
    expect(humanReadableTime(86400)).to.eql('24:00:00');
    expect(humanReadableTime(359999)).to.eql('99:59:59');
  })
});

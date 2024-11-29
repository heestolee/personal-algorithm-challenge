import { expect, describe, it } from "vitest";
import formatDuration from "../lib/humanReadableDurationFormat";

describe("humanReadableDurationFormat", function () {
  it("should be pass basic test", function () {
    expect(formatDuration(0)).to.eql("now");
    expect(formatDuration(1)).to.eql("1 second");
    expect(formatDuration(62)).to.eql("1 minute and 2 seconds");
    expect(formatDuration(120)).to.eql("2 minutes");
    expect(formatDuration(3600)).to.eql("1 hour");
    expect(formatDuration(3662)).to.eql("1 hour, 1 minute and 2 seconds");

    expect(formatDuration(15731080)).to.eql("182 days, 1 hour, 44 minutes and 40 seconds");
    expect(formatDuration(132030240)).to.eql("4 years, 68 days, 3 hours and 4 minutes");
    expect(formatDuration(205851834)).to.eql("6 years, 192 days, 13 hours, 3 minutes and 54 seconds");
    expect(formatDuration(253374061)).to.eql("8 years, 12 days, 13 hours, 41 minutes and 1 second");
    expect(formatDuration(242062374)).to.eql("7 years, 246 days, 15 hours, 32 minutes and 54 seconds");
    expect(formatDuration(101956166)).to.eql("3 years, 85 days, 1 hour, 9 minutes and 26 seconds");
    expect(formatDuration(33243586)).to.eql("1 year, 19 days, 18 hours, 19 minutes and 46 seconds");
  });

  it("random tests", () => {
    function sol(seconds) {
      if (seconds == 0) return 'now';
      function formatComponents(x) {
        let firsts = x.slice(0, -1).join(', ');
        return (firsts && firsts + ' and ') + x[x.length - 1];
      }

      let components = ["year", "day", "hour", "minute", "second"];
      let times = [31536000, 86400, 3600, 60, 1];

      return formatComponents(
        times.map((secondsByUnit, i) => {
          let value = (seconds / secondsByUnit) | 0;
          seconds %= secondsByUnit;
          return value == 0 ? '' : value + ' ' + components[i] + (value > 1 ? 's' : '');
        }).filter(Boolean));
    }

    for (let i = 0; i < 100; i++) {
      const n = Math.floor(Math.random() * 10000000);
      expect(formatDuration(n)).to.eql(sol(n));
    }
  });
});

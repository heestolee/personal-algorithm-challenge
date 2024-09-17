import { expect, describe, it } from "vitest";
import humanYearsCatYearsDogYears from "../lib/catYearsDogYears";

describe("catYearsDogYears", function () {
  it("should be pass basic test", function () {
    expect(humanYearsCatYearsDogYears(1)).to.eql([1, 15, 15]);
    expect(humanYearsCatYearsDogYears(2)).to.eql([2, 24, 24]);
    expect(humanYearsCatYearsDogYears(10)).to.eql([10, 56, 64]);
  });

  it("random", function() {
    const answer20180123 = h => [h, h==1 ? 15 : h==2 ? 24 : 24+4*(h-2), h==1 ? 15 : h==2 ? 24 : 24+5*(h-2)]

    for (let r = 0; r < 100; r++) {
      let humanYears = Math.floor(Math.random() * 25) + 1;
      let expected = answer20180123(humanYears);

      expect(humanYearsCatYearsDogYears(humanYears)).to.eql(expected);
    }
  });
});

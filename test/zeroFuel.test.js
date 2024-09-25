import { expect, describe, it } from "vitest";
import zeroFuel from "../lib/zeroFuel";

const sol = (distance, mpg, fuelLeft) => distance <= mpg * fuelLeft;

describe("zeroFuel", function () {
  it("should be pass basic test", function () {
    expect(zeroFuel(50, 25, 2)).to.eql(true);
    expect(zeroFuel(100, 50, 1)).to.eql(false);
    expect(zeroFuel(60, 30, 3)).to.eql(true);
    expect(zeroFuel(70, 25, 1)).to.eql(false);
    expect(zeroFuel(100, 25, 3)).to.eql(false);
  });

  it("Random Tests", function() {
    for (let i = 0; i < 100; ++i) {
      let d = ~~(Math.random() * 90 + 10),
          m = ~~(Math.random() * 20 + 10),
          f = ~~(Math.random() * 5 + 1);

      expect(zeroFuel(d, m, f)).to.eql(sol(d, m, f));
    }
  });
});

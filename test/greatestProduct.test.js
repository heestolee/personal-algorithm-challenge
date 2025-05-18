import { describe, it, expect } from "vitest";
import greatestProduct from "../lib/greatestProduct";

describe("Basic tests", () => {
  it("should return 3240 for '123834539327238239583'", () => {
    expect(greatestProduct("123834539327238239583")).toBe(3240);
  });

  it("should return 5292 for '92494737828244222221111111532909999'", () => {
    expect(greatestProduct("92494737828244222221111111532909999")).toBe(5292);
  });

  it("should return 0 for '02494037820244202221011110532909999'", () => {
    expect(greatestProduct("02494037820244202221011110532909999")).toBe(0);
  });
});

describe("Random tests", () => {
  const randint = (a, b) => Math.floor(Math.random() * (b - a + 1) + a);

  const sol = (n) =>
    n
      .slice(0, -4)
      .split("")
      .reduce(
        (a, _, i) =>
          ((m) => (a[1] < m ? [n.slice(i, i + 5), m] : a))(
            n
              .slice(i, i + 5)
              .split("")
              .reduce((c, d) => c * Number(d), 1)
          ),
        ["", -1]
      )[1];

  for (let i = 0; i < 40; i++) {
    const s = Array.from({ length: randint(6, 30) }, () => randint(0, 9)).join(
      ""
    );

    it(`should return correct result for '${s}'`, () => {
      expect(greatestProduct(s)).toBe(sol(s));
    });
  }
});

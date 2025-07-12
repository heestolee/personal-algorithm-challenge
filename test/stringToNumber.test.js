import { expect, describe, it } from "vitest";
import stringToNumber from "../lib/stringToNumber";

describe("stringToNumber", () => {
  it("should pass basic tests", () => {
    expect(stringToNumber("1234")).toBe(1234);
    expect(stringToNumber("605")).toBe(605);
    expect(stringToNumber("1405")).toBe(1405);
    expect(stringToNumber("-7")).toBe(-7);
  });

  it("should pass random tests", () => {
    for (let i = 0; i < 100; i++) {
      const num = Math.round(Math.random() * 1e6 - 5e5);
      expect(stringToNumber(num.toString(10))).toBe(num);
    }
  });
});

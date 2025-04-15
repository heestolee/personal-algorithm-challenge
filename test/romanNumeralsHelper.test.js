import { expect, describe, it } from "vitest";
import RomanNumerals from "../lib/romanNumeralsHelper";

function toRoman(n) {
  const Values = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  let result = "";
  for (let i = 0; n > 0 && i < Values.length; i++) {
    while (n >= Values[i][1]) {
      result += Values[i][0];
      n -= Values[i][1];
    }
  }
  return result;
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

describe("RomanNumerals", () => {
  it("fixed tests", () => {
    expect(RomanNumerals.toRoman(1000)).toBe("M");
    expect(RomanNumerals.toRoman(4)).toBe("IV");
    expect(RomanNumerals.toRoman(1)).toBe("I");
    expect(RomanNumerals.toRoman(1990)).toBe("MCMXC");
    expect(RomanNumerals.toRoman(2008)).toBe("MMVIII");

    expect(RomanNumerals.fromRoman("XXI")).toBe(21);
    expect(RomanNumerals.fromRoman("I")).toBe(1);
    expect(RomanNumerals.fromRoman("IV")).toBe(4);
    expect(RomanNumerals.fromRoman("MMVIII")).toBe(2008);
    expect(RomanNumerals.fromRoman("MDCLXVI")).toBe(1666);
  });

  it("random tests", () => {
    for (let i = 0; i < 100; i++) {
      const n = randInt(1, 3999);
      const romanString = toRoman(n);
      expect(RomanNumerals.toRoman(n)).toBe(romanString);
      expect(RomanNumerals.fromRoman(romanString)).toBe(n);
    }
  });
});

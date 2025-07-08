import { expect, describe, it } from "vitest";
import century from "../lib/centuryFromYear";

function testIt(year, expected) {
  it(`century(${year})`, () => {
    const actual = century(year);
    expect(actual).toBe(expected);
  });
}

describe("Century Function Tests", () => {
  describe("First year of a century", () => {
    testIt(1, 1);
    testIt(101, 2);
    testIt(1901, 20);
    testIt(2001, 21);
  });

  describe("Last year of a century", () => {
    testIt(100, 1);
    testIt(1900, 19);
    testIt(2000, 20);
  });

  describe("Years in the middle of a century", () => {
    testIt(42, 1);
    testIt(142, 2);
    testIt(1942, 20);
    testIt(2042, 21);
  });
});

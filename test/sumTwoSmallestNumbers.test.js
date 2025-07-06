import { describe, it, expect } from "vitest";
import sumTwoSmallestNumbers from "../lib/sumTwoSmallestNumbers.js";

function runTest(arr, expected) {
  let repr = JSON.stringify(arr);
  if (repr.length > 80) repr = `numbers.length = ${arr.length}`;
  it(repr, () => {
    expect(sumTwoSmallestNumbers([...arr])).toBe(expected);
  });
}

function solution(numbers) {
  const sorted = [...numbers].sort((a, b) => a - b);
  return sorted[0] + sorted[1];
}

describe("sumTwoSmallestNumbers()", () => {
  describe("should work for basic tests", () => {
    runTest([5, 8, 12, 19, 22], 13);
    runTest([15, 28, 4, 2, 43], 6);
    runTest([3, 87, 45, 12, 7], 10);
    runTest([23, 71, 33, 82, 1], 24);
    runTest([52, 76, 14, 12, 4], 16);
  });

  describe("should work for more fixed tests", () => {
    runTest([243, 546, 745, 123, 978], 366);
    runTest([1948, 456, 1265, 7896, 9986], 1721);
    runTest([1, 876, 234234, 45345, 34435], 877);
    runTest([5, 4, 1, 2, 3], 3);
    runTest([10, 343445353, 3453445, 3453545353453], 3453455);
    runTest([1000, 2, 3, 5], 5);
    runTest([1, 2, 3, 4], 3);
  });

  describe("should work for randomized edge cases", () => {
    const sampleSituations = [
      [3, 2, 1, 3],
      [2, 1, 3, 2],
      [2, 3, 1, 1],
      [1, 2, 3, 4, 5],
      [1, 1, 1, 1, 1],
      [2, 2, 3, 4, 1],
    ];

    function randomRename(xs) {
      const unique = [...new Set(xs)];
      const names = Array.from(
        { length: unique.length },
        () => Math.floor(Math.random() * 900) + 100
      );
      const table = new Map();
      for (let i = 0; i < unique.length; i++) {
        table.set(unique[i], names[i]);
      }
      return xs.map((x) => table.get(x));
    }

    for (const base of sampleSituations) {
      const arr = randomRename(base);
      runTest(arr, solution(arr));
    }
  });
});

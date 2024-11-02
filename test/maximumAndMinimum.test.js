import { expect, describe, it } from "vitest";
import { max, min } from "../lib/maximumAndMinimum";

let sol1 = function(list) {
  let result = list[0];
  for (let i = 1; i < list.length; i++) {
      if (result > list[i]) result = list[i];
  }
  return result;
};

let sol2 = function(list) {
  let result = list[0];
  for (let i = 1; i < list.length; i++) {
      if (result < list[i]) result = list[i];
  }
  return result;
};

describe("Find Minimum and Maximum Values", () => {
  it("Fixed Min", () => {
      expect(min([-52, 56, 30, 29, -54, 0, -110])).toBe(-110);
      expect(min([42, 54, 65, 87, 0])).toBe(0);
      expect(min([1, 2, 3, 4, 5, 10])).toBe(1);
      expect(min([-1, -2, -3, -4, -5, -10])).toBe(-10);
  });

  it("Fixed Max", () => {
      expect(max([-52, 56, 30, 29, -54, 0, -110])).toBe(56);
      expect(max([4, 6, 2, 1, 9, 63, -134, 566])).toBe(566);
      expect(max([5])).toBe(5);
      expect(max([534, 43, 2, 1, 3, 4, 5, 5, 443, 443, 555, 555])).toBe(555);
  });

  it("Random Tests", () => {
      for (let i = 0; i < 10; i++) {
          let rand_lng = Math.floor(Math.random() * 13) + 1;
          let rand_list = [];
          for (let l = 0; l < rand_lng; l++) {
              rand_list.push(Math.floor(100000 * Math.random() - 20000));
          }

          expect(min([].concat(rand_list))).toBe(sol1(rand_list));
          expect(max([].concat(rand_list))).toBe(sol2(rand_list));
      }
  });
});

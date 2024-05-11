import { expect, describe, it } from "vitest";
import isValidIP from "../lib/isValidIP"

describe("isValidIP", function () {
  it("0.0.0.0", function () {
    expect(isValidIP("0.0.0.0")).toBe(true)
  });

  it("12.255.56.1", function () {
    expect(isValidIP("12.255.56.1")).toBe(true);

  })

  it("137.255.156.100", function () {
    expect(isValidIP("137.255.156.100")).toBe(true);
  })

  it("abc.def.ghi.jkl", function () {
    expect(isValidIP('abc.def.ghi.jkl')).toBe(false);
  })

  it("123.456.789.0", function () {
    expect(isValidIP('123.456.789.0')).toBe(false);
  })

  it("12.34.56", function () {
    expect(isValidIP('12.34.56')).toBe(false);
  })

  it("01.02.03.04", function () {
    expect(isValidIP('01.02.03.04')).toBe(false);
  })

  it("256.1.2.3", function () {
    expect(isValidIP('256.1.2.3')).toBe(false);
  })

  it("1.2.3.4.5", function () {
    expect(isValidIP('1.2.3.4.5')).toBe(false);
  })

  it("123,45,67,89", function () {
    expect(isValidIP('123,45,67,89')).toBe(false);
  })

  it("1e0.1e1.1e2.2e2", function () {
    expect(isValidIP('1e0.1e1.1e2.2e2')).toBe(false);
  })

  it(" 1.2.3.4", function () {
    expect(isValidIP(' 1.2.3.4')).toBe(false);
  })

  it("1.2.3.4 ", function () {
    expect(isValidIP('1.2.3.4 ')).toBe(false);
  })

  it("12.34.56.-7", function () {
    expect(isValidIP('12.34.56.-7')).toBe(false);
  })

  it("1.2.3.4\n", function () {
    expect(isValidIP('1.2.3.4\n')).toBe(false);
  })

  it("\n1.2.3.4", function () {
    expect(isValidIP('\n1.2.3.4')).toBe(false);
  })
});
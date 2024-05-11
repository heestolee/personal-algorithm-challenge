import { expect, describe, it } from "vitest";
import expandedForm from "../lib/expandedForm";

describe("expandedForm", function () {
  it("should be blah blah", function () {
    expect(expandedForm(42)).toBe("40 + 2");
  })
})
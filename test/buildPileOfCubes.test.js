import { expect, describe, it } from "vitest";
import findNb from "../lib/buildPileOfCubes";

describe("buildPileOfCubes", function () {
  it("should be blah blah", function () {
    expect(findNb(4183059834009)).to.eql(2022);
    expect(findNb(24723578342962)).to.eql(-1);
    expect(findNb(135440716410000)).to.eql(4824);
    expect(findNb(40539911473216)).to.eql(3568);

  })
});

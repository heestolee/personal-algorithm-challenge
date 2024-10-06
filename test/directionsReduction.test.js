import { expect, describe, it } from "vitest";
import dirReduc from "../lib/directionsReduction";

describe("directionsReduction", function () {
  it("should be pass basic test", function () {
    expect(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])).to.eql(["WEST"]);
    expect(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"])).to.eql([]);
    expect(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "NORTH"])).to.eql(["NORTH"]);
    expect(dirReduc(["EAST", "EAST", "WEST", "NORTH", "WEST", "EAST", "EAST", "SOUTH", "NORTH", "WEST"])).to.eql(["EAST", "NORTH"]);
    expect(dirReduc(["NORTH", "EAST", "NORTH", "EAST", "WEST", "WEST", "EAST", "EAST", "WEST", "SOUTH"])).to.eql(["NORTH", "EAST"]);
    expect(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])).to.eql(["NORTH", "WEST", "SOUTH", "EAST"]);
  });
});

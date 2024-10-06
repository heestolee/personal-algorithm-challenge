import { expect, describe, it } from "vitest";
import feast from "../lib/feast";

describe("feast", function () {
  it("should be pass basic test", function () {
    expect(feast("great blue heron", "garlic naan")).to.eql(true);
    expect(feast("chickadee", "chocolate cake")).to.eql(true);
    expect(feast("brown bear", "bear claw")).to.eql(false);
    expect(feast("marmot", "mulberry tart")).to.eql(true);
    expect(feast("porcupine", "pie")).to.eql(true);
    expect(feast("cat", "yogurt")).to.eql(false);
    expect(feast("electric eel", "lasagna")).to.eql(false);
    expect(feast("slow loris", "salsas")).to.eql(true);
    expect(feast("ox", "orange lox")).to.eql(true);
    expect(feast("blue-footed booby", "blueberry")).to.eql(true);
  });
});

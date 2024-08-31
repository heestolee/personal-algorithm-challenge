import { expect, describe, it } from "vitest";
import { zero, one, two, three, four, five, six, seven, eight, nine, plus, minus, times, dividedBy} from "../lib/calculatingWithFunctions";

describe("calculatingWithFunction", function () {
  it("should be blah blah", function () {
    expect(seven(times    (five ()))).to.eql(35);
    expect(four (plus     (nine ()))).to.eql(13);
    expect(eight(minus    (three()))).to.eql(5);
    expect(six  (dividedBy(two  ()))).to.eql(3);
  })
});

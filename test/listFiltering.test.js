import { expect, describe, it } from "vitest";
import filter_list from "../lib/listFiltering";

describe("", function () {
  it("should be blah blah", function () {
    expect(filter_list([1,2,'a','b'])).to.eql([1,2]);
    expect(filter_list([1,'a','b',0,15])).to.eql([1,0,15]);
    expect(filter_list([1,2,'aasf','1','123',123])).to.eql([1,2,123]);
  })
});

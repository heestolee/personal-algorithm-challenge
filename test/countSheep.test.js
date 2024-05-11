import { expect, describe, it } from "vitest";
import countSheep from "../lib/countSheeps";

describe('countSheep', function() {
  const tests = [
    [],
    [undefined],
    [null],
    [false],
    [true],
    [undefined,null,false,true],
    [undefined,null,false,true,true,false,null,undefined],
    [true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true],
  ];

  it("빈 배열이 들어가는 경우 0을 반환한다", function () {
    expect(countSheep(tests[0])).to.eql(0);
  });

  it("배열이 undefined일 경우 0을 반환한다", function () {
    expect(countSheep(tests[1])).to.eql(0);
  });

  it("베열이 null일 경우 0을 반환한다", function () {
    expect(countSheep(tests[2])).to.eql(0);
  });

  it("배열이 false일 경우 0을 반환한다", function () {
    expect(countSheep(tests[3])).to.eql(0);
  });

  it("배열에 true가 있는 경우 true의 수만큼 숫자를 반환한다", function () {
    expect(countSheep(tests[4])).to.eql(1);
  });

  it("배열에 true가 있는 경우 true의 수만큼 숫자를 반환한다", function () {
    expect(countSheep(tests[5])).to.eql(1);
  });

  it("배열에 true가 있는 경우 true의 수만큼 숫자를 반환한다", function () {
    expect(countSheep(tests[6])).to.eql(2);
  });

  it("배열에 true가 있는 경우 true의 수만큼 숫자를 반환한다", function () {
    expect(countSheep(tests[7])).to.eql(17);
  });

    it("배열에 true가 있는 경우 true의 수만큼 숫자를 반환한다", function () {
    expect(countSheep([true])).to.eql(1);
  });

});

// test("sheep", () => {
//   expect(1).containSubset(1);
// })
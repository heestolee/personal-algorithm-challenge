import { expect, describe, it } from "vitest";
import rentalCarCost from "../lib/rentalCarCost";

describe("rentalCarCost", function () {
  it("should be pass basic test", function () {
    expect(rentalCarCost(1)).to.eql(40);
    expect(rentalCarCost(2)).to.eql(80);

    expect(rentalCarCost(3)).to.eql(100);
    expect(rentalCarCost(4)).to.eql(140);
    expect(rentalCarCost(5)).to.eql(180);
    expect(rentalCarCost(6)).to.eql(220);

    expect(rentalCarCost(7)).to.eql(230);
    expect(rentalCarCost(8)).to.eql(270);
    expect(rentalCarCost(9)).to.eql(310);
    expect(rentalCarCost(10)).to.eql(350);
  });

  describe("Random Tests: rentalCarCost", function() {

    function solution(d) {
      if (d<3) return d*40;
      return (d<7) ? d*40-20 : d*40-50;
    }

    it("Testing for 100 random tests", () => {
      for (let i = 0; i < 100; i++) {
        let days = ~~(Math.random() * 100) + 1;
        expect(rentalCarCost(days)).to.eql(solution(days));
      }
    });
  });
});

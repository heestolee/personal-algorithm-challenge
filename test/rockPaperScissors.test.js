import { expect, describe, it } from "vitest";
import { rps } from "../lib/rockPaperScissors";

describe("rps", function () {
  const getMsg = (n) => `Player ${n} won!`;

  const solution = (p1, p2) => {
    const winMap = {
      'rock': 'scissors',
      'scissors': 'paper',
      'paper': 'rock',
    };
    let v = winMap[p1] === p2 ? 1 : 2;
    return p1 === p2 ? 'Draw!' : `Player ${v} won!`;
  };

  it("should player 1 win", function () {
    expect(rps('rock', 'scissors')).to.eql(getMsg(1));
    expect(rps('scissors', 'paper')).to.eql(getMsg(1));
    expect(rps('paper', 'rock')).to.eql(getMsg(1));
  })

  it("should player 2 win", function () {
    expect(rps('scissors', 'rock')).to.eql(getMsg(2));
    expect(rps('paper', 'scissors')).to.eql(getMsg(2));
    expect(rps('rock', 'paper')).to.eql(getMsg(2));
  })

  it("should be draw", function () {
    expect(rps('rock', 'rock')).to.eql('Draw!');
    expect(rps('scissors', 'scissors')).to.eql('Draw!');
    expect(rps('paper', 'paper')).to.eql('Draw!');
  })

  it("random test", function () {
    const options = ['rock', 'paper', 'scissors'];

    for (let i = 0; i < 50; ++i) {
      let rnd1 = options[~~(Math.random() * 3)];
      let rnd2 = options[~~(Math.random() * 3)];
      expect(rps(rnd1, rnd2)).to.eql(solution(rnd1, rnd2));
    }
  })

});

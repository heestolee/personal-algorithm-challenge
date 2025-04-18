import { describe, it, expect } from "vitest";
import bowlingScore from "../lib/tenPinBowling";

function bowlingScore2(frames) {
  let score = 0;
  let rolls = [];

  frames
    .split(" ")
    .reverse()
    .forEach((frame, i) => {
      if (i === 0) {
        const lastRolls = frame.split("");
        rolls = lastRolls
          .map((roll, i) => {
            if (roll === "X") return 10;
            if (roll === "/") return 10 - Number(lastRolls[i - 1]);
            return Number(roll);
          })
          .reverse();
        score += rolls.reduce((a, b) => a + b, 0);
      } else {
        const first = frame[0];
        const second = frame[1];
        if (first === "X") {
          score += 10 + (rolls.at(-1) || 0) + (rolls.at(-2) || 0);
          rolls.push(10);
        } else if (second === "/") {
          const firstVal = Number(first);
          score += 10 + (rolls.at(-1) || 0);
          rolls.push(10 - firstVal);
          rolls.push(firstVal);
        } else {
          const firstVal = Number(first);
          const secondVal = Number(second);
          rolls.push(secondVal);
          rolls.push(firstVal);
          score += firstVal + secondVal;
        }
      }
    });

  return score;
}

describe("Bowling Score", () => {
  it("should pass basic test cases", () => {
    expect(bowlingScore("11 11 11 11 11 11 11 11 11 11")).toBe(20);
    expect(bowlingScore("X X X X X X X X X XXX")).toBe(300);
    expect(bowlingScore("00 5/ 4/ 53 33 22 4/ 5/ 45 XXX")).toBe(115);
    expect(bowlingScore("5/ 4/ 3/ 2/ 1/ 0/ X 9/ 4/ 8/8")).toBe(150);
    expect(bowlingScore("5/ 4/ 3/ 2/ 1/ 0/ X 9/ 4/ 7/2")).toBe(143);
    expect(bowlingScore("X X 9/ 80 X X 90 8/ 7/ 44")).toBe(171);
    expect(bowlingScore("6/ 5/ 6/ 2/ 3/ 0/ 1/ 8/ 3/ 6/5")).toBe(139);
    expect(bowlingScore("00 00 00 00 00 00 00 00 00 0/X")).toBe(20);
    expect(bowlingScore("00 00 00 00 00 00 00 00 X 0/X")).toBe(40);
  });

  it("should pass random test cases", () => {
    const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];

    for (let i = 0; i < 100; i++) {
      const turns = [];
      for (let j = 0; j < 9; j++) {
        let firstRoll = Math.floor(Math.random() * 11);
        let secondRoll = "";
        if (firstRoll === 10) {
          turns.push("X");
        } else {
          let secondVal = Math.floor(Math.random() * (11 - firstRoll));
          secondRoll = firstRoll + secondVal === 10 ? "/" : `${secondVal}`;
          turns.push(`${firstRoll}${secondRoll}`);
        }
      }
      const lastTurn = sample(["XXX", "12", "1/X", "34", "53", "XX1"]);
      turns.push(lastTurn);
      const frames = turns.join(" ");
      const actual = bowlingScore(frames);
      const expected = bowlingScore2(frames);
      expect(actual).toBe(expected);
    }
  });
});

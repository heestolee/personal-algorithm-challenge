import { expect, describe, it } from "vitest";
import findShort from "../lib/shortestWord";

describe("", function () {
  it("should be blah blah", function () {
    expect(findShort("bitcoin take over the world maybe who knows perhaps")).to.eql(3);
    expect(findShort("turns out random test cases are easier than writing out basic ones")).to.eql(3);
    expect(findShort("lets talk about javascript the best language")).to.eql(3);
    expect(findShort("i want to travel the world writing code one day")).to.eql(1);
    expect(findShort("Lets all go on holiday somewhere very cold")).to.eql(2);
    expect(findShort("Test where final word shortest see")).to.eql(3);
    expect(findShort("Let's travel abroad shall we")).to.eql(2);
  })
});

describe("Random tests",() =>{

  const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
  const sol=s=>Math.min.apply(this, s.split(" ").map(a=>a.length));
  let names=["Bitcoin", "LiteCoin", "Ripple", "Dash", "Lisk", "DarkCoin", "Monero", "Ethereum", "Classic", "Mine", "ProofOfWork", "ProofOfStake", "21inc", "Steem", "Dogecoin", "Waves", "Factom", "MadeSafeCoin", "BTC"];

  it("Testing for 40 random tests", () => {
    for (let i=0;i<40;i++){
      let s=[], len=randint(1,20);
      for (let k=0;k<len;k++) s.push(names[randint(0,names.length-1)]);
      s=s.join(" ");
      expect(findShort(s)).to.eql(sol(s));
    }
  })
})
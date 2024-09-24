import { expect, describe, it } from "vitest";
import howMuchILoveYou from "../lib/howMuchILoveYou";

describe("howMuchILoveYou", function () {
  it("should be pass basic test", function () {
    expect(howMuchILoveYou(7)).to.eql("I love you");
    expect(howMuchILoveYou(3)).to.eql("a lot");
    expect(howMuchILoveYou(6)).to.eql("not at all");
    expect(howMuchILoveYou(2)).to.eql("a little");
    expect(howMuchILoveYou(5)).to.eql("madly");
  });
});

describe("Random tests",function() {

  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
  }

  function howMuchILoveYouUN(nbPetals) {
    return ["I love you", "a little", "a lot", "passionately", "madly", "not at all"][(nbPetals - 1) % 6] //g
  }

  it("Testing for 100 random tests", () => {
  for(let i = 0; i < 100; i++){
    let r = randint(100, 500)
    let exp = howMuchILoveYouUN(r);
    // assert.strictEqual(howMuchILoveYou(r), exp, `Testing for nbPetals = ${r}`);
    expect(howMuchILoveYou(r)).to.eql(exp);
    }
  });
})

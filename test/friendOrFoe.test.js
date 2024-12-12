import { expect, describe, it } from "vitest";
import friend from "../lib/friendOrFoe";

describe("friendOrFoe", function () {
  it("should pass basic tests", function () {
    expect(friend(["Ryan", "Kieran", "Mark"])).to.eql(["Ryan", "Mark"]);
    expect(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])).to.eql(["Ryan"]);
    expect(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])).to.eql(["Jimm", "Cari", "aret"]);
    expect(friend(["Love", "Your", "Face", "1"])).to.eql(["Love", "Your", "Face"]);
    expect(friend(["Hell", "Is", "a", "badd", "word"])).to.eql(["Hell", "badd", "word"]);
    expect(friend(["Issa", "Issac", "Issacs", "ISISS"])).to.eql(["Issa"]);
    expect(friend(["Robot", "Your", "MOMOMOMO"])).to.eql(["Your"]);
    expect(friend(["Hello", "I", "AM", "Sanjay", "Gupt"])).to.eql(["Gupt"]);
    expect(friend(["This", "IS", "enough", "TEst", "CaSe"])).to.eql(["This", "TEst", "CaSe"]);
    expect(friend([])).to.eql([]);
  });

  it("should pass random tests", function () {
    function randint(a, b) {
      return Math.floor(Math.random() * (b - a + 1) + a);
    }

    Array.prototype.shuffle = function () {
      let i = this.length, j, k;
      for (i; i;) {
        j = Math.floor(Math.random() * this.length);
        k = this[--i];
        this[i] = this[j];
        this[j] = k;
      }
    };

    function sol(friends) {
      return friends.filter(function (a) {
        return a.length == 4;
      });
    }

    let base = [
      "Alex", "Arnold", "Bart", "Boris", "Bruce", "Chris", "Claire", "Dick", "Frank",
      "James", "JoJo", "Kyle", "Ivan", "Lisa", "Max", "Nikola", "Omar", "Rachel", "Ryan", "Tim"
    ];

    for (let i = 0; i < 40; i++) {
      base.shuffle();
      let friends = base.slice(0, randint(0, base.length - 1));
      expect(friend(friends.slice())).to.eql(
        sol(friends.slice()),
        `Testing for ${friends.length > 0 ? friends.join(", ") : "no friends"}`
      );
    }
  });
});

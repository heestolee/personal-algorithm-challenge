import { expect, describe, it } from "vitest";
import generateHashtag from "../lib/generateHashtag"

describe("generateHashtag", function () {
  it("", function () {
    expect(generateHashtag("")).toBe(false);
  })

  it("빈칸200개", function () {
    expect(generateHashtag(" ".repeat(200))).toBe(false);
  })

  it("Do We have A Hashtag", function () {
    expect(generateHashtag("Do We have A Hashtag")).toBe("#DoWeHaveAHashtag");
  })

  it("Codewars", function () {
    expect(generateHashtag("Codewars")).toBe("#Codewars");
  })

  it("Codewars Is Nice", function () {
    expect(generateHashtag("Codewars Is Nice")).toBe("#CodewarsIsNice");
  })

  it("Codewars is nice", function () {
    expect(generateHashtag("Codewars is nice")).toBe("#CodewarsIsNice");
  })

  it(`"code" + " ".repeat(140) + "wars"`, function () {
    expect(generateHashtag("code" + " ".repeat(140) + "wars")).toBe("#CodeWars");
  })

  it("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat", function () {
    expect(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat")).toBe(false);
  })

  it(`"a".repeat(139)`, function () {
    expect(generateHashtag("a".repeat(139))).toBe("#A" + "a".repeat(138));
  })

  it(`"a".repeat(140)`, function () {
    expect(generateHashtag("a".repeat(140))).toBe(false);
  })
})

describe("random test", function () {
  it("Random tests", () => {
    const rnd = a => Math.floor(Math.random() * a);
    const letters = "aabcdeeefghiijklmnoopqrstuuvwxyz";
    for(let _ = 0; _ < 75; ++_) {
      let input = Array.from({length: rnd(12)}, () => Array.from({length: rnd(6)}, () => letters[rnd(letters.length)]).join("")).join(" ");
      let expected = '#'+input.trim().split(/\s+/).map(w => w && w[0].toUpperCase() + w.slice(1)).join("");
      expected = expected.length > 1 && expected.length <= 140 && expected;
      expect(generateHashtag(input)).toBe(expected);
    }
  });
})

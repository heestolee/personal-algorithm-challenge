import { expect, describe, it } from "vitest";
import domainName from "../lib/extractTheDomainNameFromURL";

describe("ExtractTheDomainNameFromURL", function () {
  describe("Basic test", () => {
    it("Should pass basic tests", () => {
      expect(domainName("http://google.com")).toBe("google");
      expect(domainName("http://google.co.jp")).toBe("google");
      expect(domainName("https://123.net")).toBe("123");
      expect(domainName("https://hyphen-site.org")).toBe("hyphen-site");
      expect(domainName("http://codewars.com")).toBe("codewars");
      expect(domainName("www.xakep.ru")).toBe("xakep");
      expect(domainName("https://youtube.com")).toBe("youtube");
      expect(domainName("http://www.codewars.com/kata/")).toBe("codewars");
      expect(domainName("icann.org")).toBe("icann");
    });
  });

  describe("Random tests", () => {
    const prefixes = ["", "http://", "https://", "http://www.", "https://www."];
    const base = "0123456789abcdefghijklmnopqrstuvwxyz-";
    const secondlevel = [
      ".com",
      ".co.uk",
      ".net",
      ".edu",
      ".co.za",
      ".it",
      ".org",
      ".biz",
      ".fr",
      ".de",
      ".jp",
      ".br",
      ".tv",
      ".co",
      ".tv",
      ".pro",
      ".name",
      ".us",
      ".info",
      ".io",
    ];
    const randomstuff = [
      "",
      "",
      "/",
      "/img/",
      "/users",
      "/default.html",
      "/index.php",
      "/warez/",
      "/error",
      "/archive/",
    ];

    function randint(a, b) {
      return Math.floor(Math.random() * (b - a + 1)) + a;
    }

    function domainSol(url) {
      return url
        .replace("www.", "")
        .replace("https://", "")
        .replace("http://", "")
        .split(".")[0];
    }

    for (let i = 0; i < 40; i++) {
      let domainLength = randint(5, 30);
      let domain = "";

      while (domainLength) {
        const nextLetter = base[randint(0, 36)];
        if (nextLetter !== "-" || (domainLength !== 1 && domain !== "")) {
          domain += nextLetter;
          domainLength--;
        }
      }

      const url =
        prefixes[randint(0, 4)] +
        domain +
        secondlevel[randint(0, 19)] +
        randomstuff[randint(0, 9)];

      it(`Testing for ${url}`, () => {
        expect(domainName(url)).toBe(domainSol(url));
      });
    }
  });
});

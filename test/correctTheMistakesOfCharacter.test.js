import { expect, describe, it } from "vitest";
import correct from "../lib/correctTheMistakesOfCharacter";

describe("correctTheMistakesOfCharacter", function () {
  it("should be pass basic test", function () {
    expect(correct("1F-RUDYARD K1PL1NG")).to.eql("IF-RUDYARD KIPLING");
    expect(correct("R0BERT MERLE - THE DAY 0F THE D0LPH1N")).to.eql("ROBERT MERLE - THE DAY OF THE DOLPHIN");
  });
});

describe("Random Tests",function(){
  function correctCheck(string){
    return string.replace(/5/g,"S").replace(/0/g,"O").replace(/1/g,"I");
	}

  function randomString() {
    let array = [];
    let possible = "ABCDEFGHJKLMNPQRTUVWXYZ015";
    let length = Math.ceil( (Math.random() * 25) + 5);

    for( let i=0; i < length; i++ ) {
        array.push( possible[ Math.floor( Math.random() * possible.length)  ] );
    }
    return array.join("");
	}

  it("Testing for 20 random tests", () => {
    for( let j = 0; j < 20; j++){
      let test = randomString();
      expect(correct(test)).to.eql(correctCheck(test));
    }
  });
});

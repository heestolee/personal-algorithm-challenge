import { expect, describe, it } from "vitest";
import findNeedle from "../lib/findNeedle";

describe("findNeedle", function () {
  it("should be pass this test", function () {

    let haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
    let haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
    let haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];

    expect(findNeedle(haystack_1)).to.eql('found the needle at position 3');
    expect(findNeedle(haystack_2)).to.eql('found the needle at position 5');
    expect(findNeedle(haystack_3)).to.eql('found the needle at position 30');

    for (let i = 0; i < 25; i++) {
    let junk = [];
    let randomIndex = Math.floor(Math.random() * 25);
    for (let j = 0; j < 25; j++) {
      let random = Math.round(Math.random() * 300 + 1);
    if (j === randomIndex) junk[j] = 'needle'
    else junk[j] = random;
    }

    expect(findNeedle(junk)).to.eql('found the needle at position ' + randomIndex, 'try again, didn\'t find the needle in the right place');
    }
  });
});

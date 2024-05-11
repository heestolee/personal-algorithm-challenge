/*
*
*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!
*
*
*/

export default function expandedForm(num) {
  const process1 = [];
  const process2 = []
  let a = [];

  const stringNum = num.toString().split('')

  for (let i = 0; i < stringNum.length; i++) {
    if (stringNum[i] !== '0') {
      a.push(stringNum[i])

      for (let j = 1; j < stringNum.length - i; j++) {
       a.push(0);
      }

      let block = a.join('')
      process1.push(block)
      a = [];
    }
  }

  for (let k = 0; k < process1.length; k++) {
    process2.push(process1[k],);

    if (k !== process1.length -1) {
      process2.push(' + ');
    }
  }

  const result = process2.join('')

  return result;
}

// const { assert } = require('chai');

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(expandedForm(12), '10 + 2');
//     assert.strictEqual(expandedForm(42), '40 + 2');
//     assert.strictEqual(expandedForm(70304), '70000 + 300 + 4');
//   });
// });

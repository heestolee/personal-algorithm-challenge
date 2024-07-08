/**
 *Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
 */

export default function pigIt(str){
  const punctuationChars = [',', '.', '!', '?', ':', ';', '-', '\'', '"', '(', ')', '[', ']', '{', '}'];

  return str.split(" ").map((word) => {
    const lastChar = word.slice(-1);
    if (punctuationChars.includes(lastChar)) {
      return word;
    } else {
      return word.slice(1) + word.slice(0, 1) + "ay";
    }
  }).join(" ");
}

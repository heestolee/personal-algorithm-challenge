/**
 * Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
 */

export default function solution(str){
  let reverseWord = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverseWord += str[i];
  }

  return reverseWord;
}

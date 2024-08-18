/**
 *Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
 */

export default function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}

// function reverseWords(str) {
//   const copiedArray = [...str.split(" ").reverse().join()];

//   return copiedArray.reverse().join("").split(",").join(" ");
// }

/**
 *
 *The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

 *
 */

export default function generateHashtag (str) {
  if (!str.length) return false;

  // const strArray = [...str];

  // for (let i = 0; i < strArray.length; i++) {
  //   if(strArray[i] === ' ') {
  //     strArray.splice(i + 1, 1, strArray[i+1].toUpperCase);
  //     strArray.splice(i, 1);
  //     i--;
  //   }
  // }

  let strArray = str.split(' ');
  for (let i = 0; i < strArray.length; i++) {
    strArray[i].splice(0, 1, strArray[i][0].toUpperCase)
  }

  if(strArray.length > 140 || strArray.length === 0) {
    return false;
  }

  const upperFirst = strArray[0].toUpperCase();
  strArray.splice(0, 1, upperFirst)
  strArray.unshift('#');
  const result = strArray.join('');

  return result;
}

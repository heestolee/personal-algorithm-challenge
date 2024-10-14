/**
 * Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!
 */

export default function doubleChar(str) {
  const strArray = [...str];
  let result = "";

  for (let i = 0; i < strArray.length; i++) {
    result += strArray[i];
    result += strArray[i];
  }

  return result;
}

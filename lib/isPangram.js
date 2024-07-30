/*
*
*
A pangram is a sentence that contains every single letter of the alphabet at least once.
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*
*
*
 * pseudo code
 * 1. pangram = a-z 모두 쓰여진 문자
 * 2. a-z리스트 제작
 * 3. a-z를 순회하며 string에 포함되어있는지 검사
 * 4. 존재하면 continue로 다음 문자 검사
 * 5. 존재하지 않으면 false 반환
 * 6. 모두 포함되어 있으면 true 반환
 */

export default function isPangram(string){
  let letterList = [];
  const testString = string.toLowerCase();

  for (let i = 97; i < 123; i++) {
    letterList.push(String.fromCharCode(i))
  }

  for (let i = 0; i < letterList.length; i++) {
    if(testString.includes(letterList[i])) {
      continue;
    } else {
      return false;
    }
  } return true;
}

export default function order(words){
  if (!words.length) return "";

  const wordsArray = words.split(" ");

  const result = Array(wordsArray.length).fill(null);

  for (let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    // 각 단어에 대해 1부터 9까지 숫자가 포함되어 있는지 확인
    for (let j = 1; j <= 9; j++) {
      if (word.includes(j.toString())) {
          result[j - 1] = word;
          break; // 숫자를 찾았으면 반복문을 중지
      }
    }
  }

  return result.join(" ");
}

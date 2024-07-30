/*
*
*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*
*
*
 * pseudo code
 * 1. 주어진 배열의 길이만큼 순회하며 0이 있는지 검사
 * 2. 있으면 splice로 자르고, 자른만큼 count++, splice는 원본배열에 영향을 주므로 i--해줘야 모두 검사 가능
 * 3. count만큼 arr.push(0)
 */

export default function moveZeros(arr) {
  let count = 0;
  const copiedArr = [...arr]

  for (let i = 0; i < copiedArr.length; i++) {
      if (copiedArr[i] === 0) {
      copiedArr.splice(i,1);
      i--;
      count++;
      }
  }

  for (let j = 0; j < count; j++) {
      copiedArr.push(0);
  }

  return copiedArr;
}

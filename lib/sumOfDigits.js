
/*
*
*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*
*/

export default function digitalRoot(n) {
  /*
  * 1. 재귀함수 or while 사용
  * 2. 각 숫자를 배열에 담은 후, 모두 더함
  * 3. 9보다 크면 while문 재반복
  * 4. 9보다 작으면 while문 종료하고 return
  */

  while(n > 9){
    let array = n.toString().split('').map(Number);
      n = 0;
      for (let i = 0; i < array.length; i++) {
        n += array[i];
      }
  }

  return n;
}

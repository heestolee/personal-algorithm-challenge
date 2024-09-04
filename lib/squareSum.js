/**
 *Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because of 1^2 + 2^2 + 2^2

 */

export default function squareSum(numbers){
  if(!numbers.length) return 0;

  return numbers.map(el => el * el).reduce((acc, cur) => acc + cur);
}

/**
 * Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
 */

export default function sumMix(x){
  let sum = 0;

  for (let i = 0; i < x.length; i++) {
    sum += +x[i];
  }

  return sum;
}

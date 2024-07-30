/**
 *Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
 */

export default function findAverage(array) {
  if (!array.length) return 0;

  return array.reduce((acc, cur) => {return acc + cur}) / array.length;
}

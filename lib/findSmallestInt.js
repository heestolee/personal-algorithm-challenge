/**
 *
 */

export default function findSmallestInt(arr) {
  let target = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if(target < arr[i]) {
      continue;
    } else {
      target = arr[i]
    }
  }

  return target;
}

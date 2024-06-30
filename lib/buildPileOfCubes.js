export default function findNb(m) {
  let sum = 0;
  let count = 1;

  while (m > sum) {
    sum += count * count * count;

    if (m === sum) {
      return count;
    }

    count++;

    if (m < sum) {
      return (-1);
    }
  }
}

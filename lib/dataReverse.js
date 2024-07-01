export default function dataReverse(data) {
  if (data.length === 0) return;

  const copy = [...data];
  const cache = [];
  const result = [];

  while (copy.length > 0) {
    cache.push(copy.splice(0, 8));
  }

  while (cache.length > 0) {
    result.push(cache.pop())
  }

  return result.join(",").split(",").map(Number);
}

export default function invert(array) {
  const copied = [...array];

  return copied.map((el) => -el);
}

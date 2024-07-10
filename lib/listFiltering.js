export default function filter_list(l) {
  const copied = [...l];

  return copied.filter(num => !num.length && (num !== ""))
}

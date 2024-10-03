/**
 *
 */

export default function descendingOrder(n){
  const numberArray = [...n.toString()];
  const descendingOrder = numberArray.sort((a, b) => b - a);

  return Number(descendingOrder.join(""));
}

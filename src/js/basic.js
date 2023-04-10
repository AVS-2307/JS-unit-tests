/* export default function sum(items) {
  let result = 0;
  for (const item of items) {
    result += item;
  }
  return result;
} */

export default function hero(arr) {
  if (arr.health >= 50) {
    return 'healthy';
  }
  if (arr.health >= 15 && arr.health < 50) {
    return 'wounded';
  }
  return 'critical';
}

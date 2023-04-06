/* export default function sum(items) {
  let result = 0;
  for (const item of items) {
    result += item;
  }
  return result;
} */

export default function hero(name, health) {
  if (health >= 50) {
    return 'healthy';
  }
  if (health >= 15 && health < 50) {
    return 'wounded';
  }
  return 'critical';
}

hero();

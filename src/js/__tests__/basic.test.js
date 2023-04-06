import hero from '../basic';

test.each([
  ['маг', 90, 'healthy'],
  ['лучник', 40, 'wounded'],
  ['мечник', 10, 'critical'], /* ошибочный тест для проверки работоспособности, expected == 'critical' */
])('testing hero function with %s name and %i health', (name, health, expected) => {
  const result = hero(name, health);
  expect(result).toBe(expected);
});

test('return incorrect value', () => {
  const heroes = [
    ['маг', 90, 'healthy'],
    ['лучник', 40, 'wounded'],
    ['мечник', 10, 'critical'], /* ошибочный тест для проверки работоспособности, expected == 'critical' */
  ];
  const result = [
    ['маг', 90, 'critical'],
    ['лучник', 40, 'wounded'],
    ['мечник', 10, 'healthy'],
  ];
  expect(heroes).not.toBe(result);
});

import hero from '../basic';

test('Hero healthy', () => {
  const arr = { name: 'Маг', health: 90 };

  const result = hero(arr);
  expect(result).toEqual('healthy');
});

test('Hero wounded', () => {
  const arr = { name: 'Маг', health: 40 };

  const result = hero(arr);
  expect(result).toEqual('wounded');
});

test('Hero critical', () => {
  const arr = { name: 'Маг', health: 5 };

  const result = hero(arr);
  expect(result).toEqual('critical');
});

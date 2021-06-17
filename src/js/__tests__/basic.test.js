import sum from '../basic';

test('basic empty', () => {
  const result = sum([]);

  expect(result).toBe(0);
});

test('basic 1', () => {
  const result = sum([1]);

  expect(result).toBe(1);
});

test('basic many', () => {
  const result = sum([1, 2, 5]);

  expect(result).toBe(8);
});

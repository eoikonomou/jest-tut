const chunkArray = require('./chunk');

test('chunkArray function exists', () => {
  expect(chunkArray).toBeDefined();
});

test('Chunk an array of 10 values with a length of 2', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const length = 2;
  const chunkedArray = chunkArray(numbers, length);
  expect(chunkedArray).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
});

test('Chunk an array of 9 values with a length of 2', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const length = 2;
  const chunkedArray = chunkArray(numbers, length);
  expect(chunkedArray).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9]]);
});

test('Chunk an array of 3 values with a length of 1', () => {
  const numbers = [1, 2, 3];
  const length = 1;
  const chunkedArray = chunkArray(numbers, length);
  expect(chunkedArray).toEqual([[1], [2], [3]]);
});

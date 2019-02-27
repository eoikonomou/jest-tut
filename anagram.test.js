const isAnagram = require('./anagram');

test('isAnagram function should exist', () => {
  expect(typeof isAnagram).toEqual('function');
});

test('"cinema" is an anagram of "iceman"', () => {
  expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

test('"Dormitory" is an angram of "dirty room##"', () => {
  expect(isAnagram("Dormitory", "dirty room##")).toBeTruthy();
});

test('"Hello" is NOT an angram of "aloha"', () => {
  expect(isAnagram("Hello", "aloha")).toBeFalsy();
});

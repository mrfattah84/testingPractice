const reverseString = require('./reverseString');

test(`abc => cba`, () => {
  expect(reverseString('abc')).toBe('cba');
});

test(`123 => 321`, () => {
  expect(() => reverseString(123)).toThrow(/^input is not a string$/);
});

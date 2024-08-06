const caesarCipher = require('./caesarCipher');

test(`happy`, () => {
  expect(caesarCipher('abc', 2)).toBe('cde');
});


test(`z -> a`, () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test(`case preservation`, () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test(`non-alphabetical characters`, () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});


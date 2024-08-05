const capitalize = require('./capitalize');

test(`test => Test`, () => {
  expect(capitalize('test')).toBe('Test');
});

test(`12test => 12Test`, () => {
  expect(capitalize('12test')).toBe('12Test');
});

test(`123 => err`, () => {
  expect(() => capitalize('123')).toThrow(/^there is no valid character in the input string$/);
});

test(`12Test => 12Test`, () => {
  expect(capitalize('12Test')).toBe('12Test');
});

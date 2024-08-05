const calculator = require('./calculator')

test(`sum`, () => {
  expect(calculator.add(1,2)).toBe(3);
});

test(`subtract`, () => {
  expect(calculator.subtract(1,2)).toBe(-1);
});

test(`divide`, () => {
  expect(calculator.divide(1,2)).toBeCloseTo(0.5);
});

test(`division by 0`, () => {
  expect(() => calculator.divide(1,0)).toThrow();
});

test(`multiply`, () => {
  expect(calculator.multiply(3,2)).toBe(6);
});
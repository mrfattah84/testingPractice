function reverseString(str) {
  if (typeof str === 'string' || str instanceof String) {
    let res = '';
    const length = str.length;
    for (let i = 1; i <= length; i++) {
      const char = str.charAt(length - i);
      res += char;
    }
    return res;
  } else {
    throw new Error('input is not a string');
  }
}

module.exports = reverseString;

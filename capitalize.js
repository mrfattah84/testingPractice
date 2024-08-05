function capitalize(str) {
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char.match(/[a-zA-Z]/i)) {
      return str.slice(0, i) + str.charAt(i).toUpperCase() + str.slice(i + 1);
    }
  }
  throw new Error('there is no valid character in the input string');
}

module.exports = capitalize;

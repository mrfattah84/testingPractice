function caesarCipher(str, shiftFactor) {
  const LCL = 'abcdefghijklmnopqrstuvwxyz';
  const UCL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let res = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() == str[i]) {
      let charCode = UCL.indexOf(str[i]);
      res +=
        charCode != -1 ? UCL[(charCode + shiftFactor) % UCL.length] : str[i];
    } else {
      let charCode = LCL.indexOf(str[i]);
      res +=
        charCode != -1 ? LCL[(charCode + shiftFactor) % LCL.length] : str[i];
    }
  }

  return res;
}

module.exports = caesarCipher;

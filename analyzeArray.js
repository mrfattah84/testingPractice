function analyzeArray(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    sum += element;
    if (element < min) {
      min = element;
    }
    if (element > max) {
      max = element;
    }
  }
  return {
    average: arr.length != 0 ? sum / arr.length : undefined,
    length: arr.length,
    max,
    min,
  };
}

module.exports = analyzeArray;

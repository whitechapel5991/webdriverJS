class Calculator {
  static add(numberArray) {
    return numberArray.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  }

  static multiply(numberArray) {
    return numberArray.reduce((acc, curr) => {
      return acc * curr;
    }, 1);
  }
}

module.exports = Calculator;

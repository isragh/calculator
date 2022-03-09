class Calculator {
  constructor() {
    this.pi = Math.PI;
    this.e = Math.E;
  }

  ratio(x, y, width) {
    return (width * y) / x;
  }

  percentage(x, y) {
    return `${(y / 100) * x}%`;
  }

  add(x, y) {
    return x + y;
  }

  subtract(x, y) {
    return y - x;
  }

  multiply(x, y) {
    return x * y;
  }

  divide(x, y) {
    if (y === 0) {
      return "error";
    } else return x / y;
  }

  modulation(x, y) {
    if (y === 0) {
      return "error";
    } else return x % y;
  }

  elevate(x, y) {
    return x ** y;
  }

  sqrt(x) {
    return Math.sqrt(x);
  }
}

const calculate = new Calculator();

console.log(calculate.pi);
console.log(calculate.e);
console.log("height is", calculate.ratio(4, 3, 1280));
console.log("percentage", calculate.percentage(50, 20));
console.log("sum", calculate.add(3, 2));
console.log("subtraction", calculate.subtract(3, 2));
console.log("multiplication", calculate.multiply(3, 3));
console.log("division", calculate.divide(5, 2));
console.log("modulation", calculate.modulation(5, 2));
console.log("elevation", calculate.elevate(3, 4));
console.log("square root", calculate.sqrt(25));

// Static methods are called on the class, not on instances

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

console.log(Calculator.add(5, 10)); // Output: 15

let num = new Number(10);
  // 10
console.log(num.valueOf())

let a = 100
console.log(isFinite(100)) // true
console.log(isFinite(Infinity)) // false


let b = 123.456;
console.log(b.toPrecision(4))  // "123.5"
console.log(b.toExponential(2)) // 1.23e+2

let c = 4
// Determines whether a value is an integer
console.log(Number.isInteger(4)) // true
console.log(Number.isInteger(4.5)) // false


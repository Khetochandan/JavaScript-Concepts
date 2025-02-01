let fruits = ["apple", "banana"];

// indexOf() – Returns the first index of an element.
let index = fruits.indexOf("banana");  // 1
console.log(index)

// includes() – Checks if an element exists.
console.log(fruits.includes("apple"))  // true

// find() – Returns the first element that satisfies a condition
let numbers = [1,4,6]
let num = numbers.find(num => num > 1);  // 2
console.log(num)

// findIndex() – Returns the index of the first matching element
let idx = numbers.findIndex(num => num > 1);  // 1
console.log(idx)

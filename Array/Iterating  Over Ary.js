let fruits = ["apple", "banana"];

// 1.forEach() – Executes a function for each element.
fruits.forEach(fruit => console.log(fruit) ); 
// apple
// banana

// 2.map() – Creates a new array by transforming each element
let numbers = [1, 2, 3, 4, 6];
let squares = numbers.map(num => num * num);  // [1, 4, 9]
console.log(squares)

// 3.filter() – Creates a new array with elements that pass a test.
let evenNumbers = numbers.filter(num => num % 2 === 0);  // [2,4,6]
console.log(evenNumbers)

// 4.reduce() – Reduces an array to a single value
let sum = numbers.reduce((acc, num) => acc + num, 0);  // 6
console.log(sum)
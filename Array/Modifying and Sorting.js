// 1.splice() – Adds or removes elements
const fruits = ["apple", "banana", "mango"];
 fruits.splice(1,1,"orange");  // ["apple", "orange", "mango"]
console.log(fruits)

// 2.slice() – Returns a portion of an ary
const part = fruits.slice(1, 3);  // ["orange", "mango"]
console.log(part)

// concat() – join one or more ary together
const combined = fruits.concat(["grape"]);  // ["apple", "orange", "mango", "grape"]
console.log(combined)

// sort() – Sorts an arra
const nums = [3, 1, 2];
nums.sort();  // [1, 2, 3]
console.log(nums)

// reverse() – Reverses the array 
nums.reverse();  // [3, 2, 1]
console.log(nums)


// Other Useful Methods
// join() – Joins array elements into a string
const sentence = fruits.join(", ");  // "apple, orange, mango"
console.log(sentence)

// split() – Splits a string into an array
const words = "Hello World".split(" ");  // ["Hello", "World"]
console.log(words)

// flat() – Flattens nested arrays
const nested = [1, [2, [3]]];
const flatArray = nested.flat(2);  // [1, 2, 3]
console.log(flatArray)

let obj = { name: "John", age: 25 };
console.log(Object.keys(obj))  // ["name", "age"]
console.log(Object.values(obj)) // Object.values(object)
console.log(Object.entries(obj)) // [ [ 'name', 'John' ], [ 'age', 25 ] ]

// JSON Getter Methods-Converts an object to a JSON string
console.log(JSON.stringify(obj)) // {"name":"John","age":25}



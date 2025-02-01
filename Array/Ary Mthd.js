 // A. Adding and Removing Elements
  const fruits = ["apple", "banana"];

   // push() – Adds an element to the end.
   fruits.push("mango");  // ["apple", "banana", "mango"]
   console.log(fruits); 
   
   // 1.pop() – Removes the last element.
   fruits.pop();  // ["apple", "banana"]
   console.log(fruits);
   
   // 2.unshift() – Adds an element to the beginning.
   fruits.unshift("orange");  // ["orange", "apple", "banana"]
   console.log(fruits);
   
   // 3.shift() – Removes the first element.
   fruits.shift();  // ["apple", "banana"]
   console.log(fruits);
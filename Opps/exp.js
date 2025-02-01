// Example (Without OOP):

function greet(user) {
  console.log(`Hello, ${user.name}`);
}
const user = { name: 'Chandan' };
greet(user);

// Example (With OOP):

class User {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, ${this.name}`);
  }
}
const chandan = new User('Chandan');
chandan.greet(); // Output: Hello, Chandan

// Here, the OOP version is much more structured and easier to expand.

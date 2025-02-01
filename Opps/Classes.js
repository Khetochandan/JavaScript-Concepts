
// A class is a blueprint for creating objects with predefined properties and methods
class person {

 /*[constructor(brand) {
The constructor is a special method in a class that is automatically called when an object is created from the class.
It is used to initialize the properties of the object]*/

  constructor(name, age) {
    this.name = name
    this.age = age

  }
   greet(){
    console.log(`Hello! My name is ${this.name} and I am ${this.age} years old.`)
   }
}
let nam = new person('Chandan',26)
nam.greet() // Hello! My name is Chandan and I am 26 years old

// 2nd exp

class BankAccount {
  #balance;  // Private field

  constructor(accountHolder, initialBalance) {
    this.accountHolder = accountHolder;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited: ${amount}, New Balance: ${this.#balance}`);
  }

  getBalance() {
    return this.#balance;
  }
}

const myAccount = new BankAccount('Chandan', 1000);
myAccount.deposit(500);  // Output: Deposited: 500, New Balance: 1500
console.log(myAccount.getBalance()); // Output: 1500
// console.log(myAccount.#balance); // Error: Private field '#balance' must be declared in an enclosing class

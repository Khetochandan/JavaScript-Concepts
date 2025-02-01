
class BankAccount {
  #balance = 0; // Private property (Note: # is used for private fields)

  constructor(owner, initialBalance) {
    this.owner = owner;
    this.#balance = initialBalance;
  }

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    } else {
      console.log('Deposit amount must be positive.');
    }
  }
}

const myAccount = new BankAccount('Chandan', 5000);
myAccount.deposit(1000); 
console.log(myAccount.getBalance()); // Output: 6000
// console.log(myAccount.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class

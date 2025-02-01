// Abstraction focuses on exposing only relevant details while hiding implementation

class Employee {
  constructor(name,salary) {
    this.name = name
    this._salary = salary
  }

  getSalary() {
    return this._salary
  }

  increseSalary(amount) {
    this._salary += amount
    console.log(`New salary of ${this.name} is: ${this._salary}`)
  }
}

let emp = new Employee ('Chandan', 50000)
emp.increseSalary(6000) // Output: New salary of Chandan is 55000
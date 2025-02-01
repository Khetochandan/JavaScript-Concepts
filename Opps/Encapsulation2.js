
class Car {
  #brand; // Private field

  constructor(brand) {
    this.#brand = brand; // Initialize private field
  }

  getBrand() {
    return this.#brand; // Getter method
  }

  setBrand(newBrand) {
    this.#brand = newBrand; // Setter method
  }
}

let myCar = new Car("BMW");
console.log(myCar.getBrand()); // Output: BMW

myCar.setBrand("Honda");
console.log(myCar.getBrand()); // Output: Honda

myCar.setBrand("Hero");
console.log(myCar.getBrand()); // Output: Hero

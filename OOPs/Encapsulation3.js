
class Car {
  constructor(brand) {
    this.brand = brand; // No underscore, directly use the property
  }
}

let myCar = new Car("BMW");
console.log(myCar.brand); // Output: BMW

myCar.brand = "Honda";
console.log(myCar.brand); // Output: Honda

myCar.brand = "Hero";
console.log(myCar.brand); // Output: Hero




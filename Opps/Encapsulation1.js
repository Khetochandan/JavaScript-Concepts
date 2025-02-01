
function createCar(brand) {
  let _brand = brand; // Private variable

  return {
    getBrand() {
      return _brand; // Getter
    },
    setBrand(newBrand) {
      _brand = newBrand; // Setter
    },
  };
}

let myCar = createCar("BMW");
console.log(myCar.getBrand()); // Output: BMW

myCar.setBrand("Honda");
console.log(myCar.getBrand()); // Output: Honda

myCar.setBrand("Hero");
console.log(myCar.getBrand()); // Output: Hero

// Encapsulation is the bundling of data (properties) and methods (functions) within a class

class Car {
  constructor(brand) {
    this._brandbrand = brand  // // Use underscore to indicate a private property
  }

  /*[ A getter allows you to access the value of _brand in a controlled way, i.e., when you do myCar.brand]*/

    get brand() {
      return this._brand
    }

    /*[A setter allows you to modify the value of _brand in a controlled way, i.e., when you do myCar.brand = 'Honda'] */

    set brand(newBrand){
      this._brand = newBrand
    }
  }
  let myCar = new Car('BMW')
   console.log(myCar.brand) // o/p: BMW
   myCar.brand = 'Honda'
   console.log(myCar.brand) // o/p: Honda
   myCar.brand = 'Hero'
   console.log(myCar.brand)


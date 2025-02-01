// Inheritance allows one class to inherit properties and methods from another class.

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);  // Calls parent class constructor
    this.breed = breed;
  }
  speak() {
    super.speak();  // Calls parent method
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog('Buddy', 'Golden Retriever');
dog.speak(); 

// Output:
// Buddy makes a sound
// Buddy barks

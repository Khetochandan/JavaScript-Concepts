
// Polymorphism allows methods to behave differently based on the object calling them

class Shape {
  area() {
    console.log('Area method must be implemented.');
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

const shapes = [new Rectangle(10, 20), new Circle(5)];
shapes.forEach(shape => console.log(shape.area())); // Output: 200, 78.53981633974483

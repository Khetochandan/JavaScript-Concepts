// this refers to the context where the function is called. It can be tricky due to dynamic bindin

const obj = {
  name: 'Chandan',
  greet() {
    console.log(this.name); // Refers to obj
  }
};

obj.greet(); // Output: Chandan

const greet = obj.greet;


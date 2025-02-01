function get() {
  return `Hello, my name is ${this.name} and I am ${this.age} yr old`
}
let person = {
  name: "Kk",
  age: 20,
  get,
}
console.log(person.get())  // Hello, my name is Kk and I am 20 yr old
console.log(`Age: ${person.age}`)  // Age: 20

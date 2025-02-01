// An object is a collection of properties, where each property has a key and a value
// 1st exp
let person = {
  name: 'Chandan Kheto',
  age: 26,
  show: function () {
    console.log(`Hello,my name is ${this.name} and I'm ${this.age} yr old boy`)
    console.log(person.name)
  }
} 
  person.show()

// 2nd exp 
let laptop = {
  brand: 'Dell',
  model: 'Inspiration',
  price: 66000,
   
  congf:{
    processor: 'Intel i7',
    genneration: '13th',
    ram: '16GB',
    ssd: '512GB'
  },
  showAll: function () {
    console.log(`This is a ${this.brand} ${this.model} priced at ${this.price} INR.`)
    console.log(laptop.congf)
  }
}
  laptop.showAll()

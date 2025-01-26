let date = new Date()
date.setDate(date.getDate())
console.log(date)

let year = date.getFullYear()
let month = date.getMonth() + 1
let day = date.getDate()
let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()
let milliseconds = date.getMilliseconds()

console.log(`year: ${year}`)
console.log(`month: ${month}`)
console.log(`day: ${day}`)
console.log(`hour: ${hours}`)
console.log(`minutes: ${minutes}`)
console.log(`seconds: ${seconds}`)
console.log(`milliseconds: ${milliseconds}`)

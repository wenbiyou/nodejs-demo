// console.log(global)

// console.log('ngz-ceshi', __filename)

// console.log('ngz-ceshi', __dirname)

// console.log(this) // {}

// // 默认情况下，this 是空对象，和 global 并不是一样的
// console.log(this === global) // false

// (function () {
//   console.log(this === global) // true
// })()

const obj = require('./01-m')
console.log(obj)
console.log(obj.name)
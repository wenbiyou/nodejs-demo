// const b1 = Buffer.alloc(10)
// const b2 = Buffer.allocUnsafe(10)

// console.log(b1)
// console.log(b2)


// from
// 字符串，第二个参数默认utf8
// const b3 = Buffer.from('1')
// const b4 = Buffer.from('中')
// console.log(b3)
// console.log(b4)

// const b5 = Buffer.from([1, 2, 3])
// console.log(b5)

// const b6 = Buffer.from('中')
// console.log(b6)
// console.log(b6.toString())

const b7 = Buffer.alloc(3)
const b8 = Buffer.from(b7)
console.log(b7)
console.log(b8)

b7[0] = 1

console.log(b7)
console.log(b8)




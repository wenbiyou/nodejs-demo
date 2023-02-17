let buf = Buffer.alloc(6)

// fill
// buf.fill('123')
// buf.fill('123', 1)
// buf.fill('123', 1, 3)
// buf.fill(123)

// write
// buf.write('123', 1, 3)

// toString
// buf = Buffer.from('极兔国际')
// console.log(buf)
// console.log(buf.toString('utf-8', 3))
// console.log(buf.toString('utf-8', 3, 9))

// slice
// buf = Buffer.from('极兔国际')
// // let b1 = buf.slice(3)
// // let b1 = buf.slice(3, 9)
// let b1 = buf.slice(-3)
// console.log(b1)
// console.log(b1.toString())

// indexOf
// buf = Buffer.from('zwj会乾坤大挪移，会九阳神功，会圣火令')
// console.log(buf)
// console.log(buf.indexOf('会', 4))

// copy
let b1 = Buffer.alloc(6)
let b2 = Buffer.from('极兔')
b2.copy(b1, 3)
console.log(b1.toString())
console.log(b2.toString())


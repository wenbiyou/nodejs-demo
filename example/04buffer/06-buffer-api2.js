let b1 = Buffer.from('极兔')
let b2 = Buffer.from('国际')

let b = Buffer.concat([b1, b2])
console.log(b)
console.log(b.toString())

// isBuffer
console.log(Buffer.isBuffer(b))
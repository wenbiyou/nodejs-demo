const MyTransformCode = require('./myTransform')


let ts = new MyTransformCode()

let str1 = 'hell0 极兔国际'

// console.log(Buffer.from(str1))

let encodeBuf = ts.encode(str1, 1)

let result = ts.decode(encodeBuf)
console.log(result)

let len = ts.getPackageLen(encodeBuf)
console.log('ngz-ceshi', len)

const fs = require('fs')

let rs = fs.createReadStream('test.txt', {
  flags: 'r',
  encoding: null,
  fd: null,
  mode: 438,
  autoClose: true,
  start: 0,
  // end: 3,
  highWaterMark: 4
})

// rs.on('data', (chunk) => {
//   console.log(chunk.toString())
//   rs.pause()
//   setTimeout(() => {
//     rs.resume()
//   }, 1000)
// })

// rs.on('readable', () => {
//   let data
//   while ((data = rs.read(1)) !== null) {
//     console.log(data.toString())
//     console.log('----> ', rs._readableState.length)
//   }
// })

rs.on('open', (fd) => {
  console.log(fd, '文件打开')
})
rs.on('close', () => {
  console.log('文件关闭')
})

let bufferArr = []
rs.on('data', (chunk) => {
  bufferArr.push(chunk)
})

rs.on('end', () => {
  console.log('当数据被清空之后')
  console.log(Buffer.concat(bufferArr).toString())

})
rs.on('error', (err) => {
  console.log('出错了')
})

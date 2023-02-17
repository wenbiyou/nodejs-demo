const fs = require('fs')

let rs = fs.createReadStream('test.txt', {
  highWaterMark: 4
})

let ws = fs.createWriteStream('test1.txt', {
  highWaterMark: 1
})

/* rs.on('data', (chunk) => {
  ws.write(chunk, () => {
    console.log('数据写完了')
  })
}) */

/* 
let flag = true
rs.on('data', (chunk) => {
  flag = ws.write(chunk, () => {
    console.log('数据写完了')
  })
  if (!flag) {
    rs.pause()
  }
})

ws.on('drain', () => {
  rs.resume()
})
 */

rs.pipe(ws)


const fs = require('fs')

const ws = fs.createWriteStream('test.txt', {
  flags: 'w',
  mode: 438,
  fd: null,
  encoding: 'utf-8',
  start: 0,
  highWaterMark: 3
})
/* ws.write('hello vue.js', () => {
  console.log('数据写完了 ---》 2')
})
ws.write('极兔国际', () => {
  console.log('数据写完了 --》 1')
})
 */

// open
ws.on('open', (fd) => {
  console.log('open', fd)
})

ws.write('hello ')


// close 数据全部写入完成后再执行
ws.on('close', () => {
  console.log('文件关闭了')
})

// end 意味者写入操作完成
ws.end('极兔国际')

// ws.write('2')

// error
ws.on('error', (err) => {
  console.log('出错了')
  // console.log(err)
})
const fs = require('fs')
const path = require('path')

// readFile
// fs.readFile(path.resolve('data1.txt'), 'utf-8', (err, data) => {
//   if (err) throw err
//   console.log(data)
// })

// writeFile
// fs.writeFile('data.txt', 'hello', {
//   mode: 438,
//   flag: 'w+',
//   encoding: 'utf-8'
// }, (err) => {
//   if (!err) {
//     fs.readFile('data.txt', 'utf-8', (err, data) => {
//       console.log(data)
//     })
//   }
// })

// appendFile
// fs.appendFile('data.txt', '极兔国际', (err) => {
//   console.log('写入成功')
// })

// copyFile
// fs.copyFile('data.txt', 'test.txt', (err) => {
//   console.log('copy success')
// })

// watchFile
fs.watchFile('data.txt', { interval: 20 }, (curr, prev) => {
  if (curr.mtime !== prev.mtime) {
    console.log('文件被修改了')
    fs.unwatchFile('data.txt')
  }
})
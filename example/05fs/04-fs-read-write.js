const fs = require('fs')


let buf = Buffer.alloc(10)

/* * read: 读操作将磁盘文件写入到buffer中
* fd 当前打开的文件
* buf 当前缓冲区
* offset 从当前buf的那个位置开始执行写入
* length  表示当前写入的长度
* postion 表示当前从文件的那个位置开始读取
 */

// fs.open('data.txt', 'r', (err, rfd) => {
//   console.log('ngz-ceshi', rfd)
//   fs.read(rfd, buf, 1, 4, 3, (err, readBytes, data) => {
//     console.log(readBytes)
//     console.log(data)
//     console.log(data.toString())
//   })
// })

// write 将缓冲区里的内容写入到磁盘文件中
buf = Buffer.from('1234567890')
fs.open('b.txt', 'w', (err, wfd) => {
  fs.write(wfd, buf, 2, 4, 0, (err, written, buffer) => {
    console.log(written)
    console.log(buffer)
    console.log(buffer.toString())
    fs.close(wfd)
  })
})

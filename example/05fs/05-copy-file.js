const fs = require('fs')

/**
 * 01 打开 a 文件，利用 read 将数据保存到 buffer 暂存起来
 * 02 打开 b 文件，利用 write 将 buffer 中数据写入到 b 文件中
 */

let buf = Buffer.alloc(10)

// 1. 打开指定文件
// fs.open('a.txt', 'r', (err, rfd) => {
//   // 3. 打开 b文件，用于执行数据写入操作
//   fs.open('b.txt', 'w', (err, wfd) => {
//     // 2. 从打开的文件读取数据
//     fs.read(rfd, buf, 0, 10, 0, (err, readBytes) => {
//       // 4. 将buffer中的数据写入到 b.txt 中
//       fs.write(wfd, buf, 0, 10, 0, (err, written) => {
//         console.log('write success!')
//       })
//     })
//   })
// })

// 数据的完全拷贝
// fs.open('a.txt', 'r', (err, rfd) => {
//   fs.open('b.txt', 'w', (err, wfd) => {
//     fs.read(rfd, buf, 0, 10, 0, (err, readBytes) => {
//       fs.write(wfd, buf, 0, 10, 0, (err, written) => {
//         fs.read(rfd, buf, 0, 10, 10, (err, readBytes) => {
//           fs.write(wfd, buf, 0, 10, 10, (err, written) => {
//             fs.read(rfd, buf, 0, 10, 20, (err, readBytes) => {
//               fs.write(wfd, buf, 0, 10, 20, (err, written) => {
//                 console.log('write success!')
//               })
//             })
//           })
//         })
//       })
//     })
//   })
// })

const BUFFER_SIZE = buf.length
let readOffSet = 0

fs.open('a.txt', 'r', (err, rfd) => {
  fs.open('b.txt', 'w', (err, wfd) => {
    function next () {
      fs.read(rfd, buf, 0, BUFFER_SIZE, readOffSet, (err, readBytes) => {
        if (!readBytes) {
          //  条件成立，内容已读区完毕
          fs.close(rfd, () => {})
          fs.close(wfd, () => {})
          console.log('拷贝完成')
          return
        }
        readOffSet += readBytes
        fs.write(wfd, buf, 0, readBytes, (err, written) => {
          next()
        })
      })
    }
    next()
  })
})


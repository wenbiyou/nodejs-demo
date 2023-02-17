const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

// function mkDir (dirPath, cb) {
//   let parts = dirPath.split(path.sep)
//   let index = 1

//   function next() {
//     if (index > parts.length) return cb && cb()

//     let current = parts.slice(0, index++).join(path.sep)

//     fs.access(current, (err) => {
//       if (err) {
//         fs.mkdir(current, next)
//       } else {
//         next()
//       }
//     })
//   }
//   next()
// }

// mkDir('a/b/c', () => {
//   console.log('created success!')
// })

// 将 access、mkdir 处理成 async...await 风格
const access = promisify(fs.access)
const mkdir = promisify(fs.mkdir)

async function myMkdir(dirPath, cb) {
  let parts = dirPath.split(path.sep)
  for (let i=1; i<=parts.length; i++) {
    let current = parts.slice(0, i).join(path.sep)
    try {
      await access(current)
    } catch (err) {
      await mkdir(current)
    }
  }
  cb && cb()
}

myMkdir('a/b/c', () => {
  console.log('created success!')
})




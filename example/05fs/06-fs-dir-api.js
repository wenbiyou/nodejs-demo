const fs = require('fs')

// 1. access
// fs.access('a.txt', (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('有操作权限')
//   }
// })

// 2. stat
// fs.stat('a.txt', (err, statObj) => {
//   console.log(statObj.size)
//   console.log(statObj.isFile())
//   console.log(statObj.isDirectory())
// })

// 3. mkdir
// fs.mkdir('a/b/c/d/e', { recursive: true }, (err) => {
//   if (!err) {
//     console.log('created success')
//   } else {
//     console.log(err)
//   }
// })

// 4. rmdir/rm
// fs.rmdir('a/b', (err) => {
//   if (!err) {
//     console.log('deleted success')

//   } else {
//     console.log(err)
//   }
// })
fs.rm('a', { recursive: true }, (err) => {
  if (!err) {
    console.log('deleted success')

  } else {
    console.log(err)
  }
})

// 5. readdir
// fs.readdir('a', (err, files) => {
//   console.log(files)
// })

// 6. unlink
// fs.unlink('a/a.txt', (err) => {
//   if (!err) {
//     console.log('delte success')
//   }
// })
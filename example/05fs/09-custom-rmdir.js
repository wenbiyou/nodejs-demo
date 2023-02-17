const fs = require('fs')
const path = require('path')


function myRmdir(dirPath, cb) {
  fs.stat(dirPath, (err, statObj) => {
    if (statObj.isDirectory()) {
      fs.readdir(dirPath, (err, files) => {
        let dirs = files.map(item => {
          return path.join(dirPath, item)
        })
        let index = 0
        function next() {
          if (index === dirs.length) {
            return fs.rmdir(dirPath, cb)
          }
          let current = dirs[index++]
          myRmdir(current, next)
        }
        next()
      })
    } else {
      fs.unlink(dirPath, cb)
    }
  })
}

myRmdir('temp', () => {
  console.log('deleted success!')
})
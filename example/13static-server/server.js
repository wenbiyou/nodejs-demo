const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')
const mime = require('mime')


const server = http.createServer((req, res) => {
  // 1.路径处理
  let { pathname } = url.parse(req.url)
  // 处理中文文件名乱码
  pathname = decodeURIComponent(pathname)
  let absPath = path.join(__dirname, pathname)
  // console.log(absPath)
  // 2.目标资源状态处理
  fs.stat(absPath, (err, statObj) => {
    if (err) {
      res.statusCode = 404
      res.end('404 Not Found')
      return
    }
    if (statObj.isFile()) {
      fs.readFile(absPath, (err, data) => {
        res.setHeader('Content-type', mime.getType(absPath) + ';charset=utf-8')
        res.end(data)
      })
    } else {
      fs.readFile(path.join(absPath, 'index.html'), (err, data) => {
        res.setHeader('Content-type', mime.getType(absPath) + ';charset=utf-8')
        res.end(data)
      })

    }
  })

})

server.listen(2023, () => {
  console.log('server is start……')
})
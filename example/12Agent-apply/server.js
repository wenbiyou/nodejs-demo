const http = require('http')

const server = http.createServer((req, res) => {
  let arr = []
  req.on('data', (chunk) => {
    arr.push(chunk)
  })
  req.on('end', () => {
    let ret = Buffer.concat(arr).toString()
    console.log(ret)
    res.end('服务端')
  })
})

server.listen(2345, () => {
  console.log('server is start...')
})
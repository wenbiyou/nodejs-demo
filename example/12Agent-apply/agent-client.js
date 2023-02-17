const http = require('http')


let options = {
  host: '127.0.0.1',
  port: 2345,
  path: '/',
  method: 'POST'
}

let server = http.createServer((request, response) => {
  let req = http.request(options, (res) => {
    let arr = []
    res.on('data', (chunk) => {
      arr.push(chunk)
    })
    res.on('end', () => {
      let ret = Buffer.concat(arr).toString()
      response.setHeader('Content-Type', 'text/html; charset=utf-8')
      response.end(ret)
    })
  })
  req.end('极兔国际')
})

server.listen(3456, () => {
  console.log('本地开发服务器启动')
})

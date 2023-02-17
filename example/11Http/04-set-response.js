const http = require('http')

const server = http.createServer((req, res) => {
  console.log('有请求进来了')

  // res
  // res.write('ok')
  // res.end()
  // res.end('hello world')
  res.statusCode = 302
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.end('极兔国际')
})

server.listen(1234, () => {
  console.log('server is running ....')
})
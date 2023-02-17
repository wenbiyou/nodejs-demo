const http = require('http')
const url = require('url')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
  console.log('有请求进来了')

  let {pathname, query} = url.parse(req.url)
  console.log(pathname, '---', query)

  let arr = []
  req.on('data', (data) => {
    arr.push(data)
  })
  req.on('end', () => {
    let obj = Buffer.concat(arr).toString()
    if (req.headers['content-type'] === 'application/json') {
      let a = JSON.parse(obj)
      a.title = 'title 属性'
      res.end(JSON.stringify(a))
    } else if (req.headers['content-type'] === 'application/x-www-urlencoded') {
      let ret = querystring.parse(obj)
      res.end(JSON.stringify(ret))
    }
  })
 
})

server.listen(1234, () => {
  console.log('server is running ....')
})
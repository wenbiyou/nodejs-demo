const http = require('http')

// http.get({
//   hot: '127.0.0.1',
//   port: 1234,
//   path: '/?id=1'
// }, (res) => {

// })

let options = {
  hot: '127.0.0.1',
  port: 1234,
  path: '/?id=1',
  method: 'POST',
  headers:  {
    // 'Content-type': 'application/json'
    'Content-type': 'application/x-www-urlencoded'
  }
}

let req = http.request(options, (res) =>{
  let arr = []
  res.on('data', (data) => {
    arr.push(data)
  })
  res.on('end', () => {
    console.log(Buffer.concat(arr).toString())
  })
})
// req.end('生活就像。。。')
// req.end('{"name": "zwj"}')
req.end('id=12,b=34')
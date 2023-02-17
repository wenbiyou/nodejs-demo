const net = require('node:net')

const client = net.createConnection({
  port: 2000,
  host: '127.0.0.1'
})

let dataArr = [
  '极兔国际2',
  '极兔国际3',
  '极兔国际4',
]

client.on('connect', () => {
  client.write('极兔国际1')
  // 处理粘包的原始方法
  for (let i=0; i<dataArr.length; i++) {
    (function(val, index) {
      setTimeout(() => {
        client.write(val)
      }, 1000 * (index + 1))
    })(dataArr[i], i)
  }
})

client.on('data', (chunk) => {
  console.log(chunk.toString())
})

client.on('error', (err) => {
  console.log(err)
})

client.on('close', () => {
  console.log('客户端断开连接')
})


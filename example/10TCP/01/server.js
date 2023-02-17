const { sortedIndexBy } = require('lodash')
const net = require('net')

const server = net.createServer()

const PORT = 2000
const HOST = '127.0.0.1'

server.listen(PORT, HOST)

server.on('listening', () => {
  console.log(`服务端开启在 ${HOST}:${PORT}`)
})

// 接收消息 回写消息
server.on('connection', (socket) => {
  socket.on('data', (chunk) => {
    const msg = chunk.toString()
    console.log(msg)
    // 回数据
    socket.write(Buffer.from('你好，' + msg))
  })
})

// close
server.on('close', () => {
  console.log('服务端关闭了')
})

// error
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log('地址正在被使用')
  } else {
    console.log(err)
  }
})

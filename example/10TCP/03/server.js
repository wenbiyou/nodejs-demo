const net = require('net')
const MyTransformCode = require('./myTransform.js')

const server = net.createServer()

let overangeBuffer = null
let ts = new MyTransformCode()

server.listen('1234', '127.0.0.1')

server.on('listening', () => {
  console.log(`server running in 127.0.0.1:1234`)
})

server.on('connection', (socket) => {
  socket.on('data', (chunk) => {
    if (overangeBuffer) {
      chunk = Buffer.concat([overangeBuffer, chunk])
    }
    let packageLen = 0
    while (packageLen = ts.getPackageLen(chunk)) {
      const packageCon = chunk.slice(0, packageLen)
      chunk = chunk.slice(packageLen)

      const ret = ts.decode(packageCon)
      console.log(ret)
      socket.write(ts.encode(ret.body, ret.serialNum))
    }
    overangeBuffer = chunk
  })
})

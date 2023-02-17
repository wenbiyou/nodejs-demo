const net = require('net')
const MyTransformCode = require('./myTransform.js')

let overangeBuffer = null
let ts = new MyTransformCode()

const client = net.createConnection({
  port: 1234,
  host: '127.0.0.1'
})

client.write(ts.encode('极兔国际1'))
client.write(ts.encode('极兔国际2'))
client.write(ts.encode('极兔国际3'))
client.write(ts.encode('极兔国际4'))
client.write(ts.encode('极兔国际hello'))

client.on('data', (chunk) => {
  if (overangeBuffer) {
    chunk = Buffer.concat([overangeBuffer, chunk])
  }
  let packageLen = 0
  while (packageLen = ts.getPackageLen(chunk)) {
    const packageCon = chunk.slice(0, packageLen)
    chunk = chunk.slice(packageLen)

    const ret = ts.decode(packageCon)
    console.log(ret)
  }
  overangeBuffer = chunk
})
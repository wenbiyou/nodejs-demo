const { Readable } = require('stream')

let source = ['Gna', 'tom', 'jim']

class MyReadable extends Readable {
  constructor(source) {
    super()
    this.source = source
  }
  _read() {
    let data = this.source.shift() || null
    this.push(data)
  }
}

 let myReadable = new MyReadable(source)

/*  myReadable.on('readable', () => {
  let data = null
  while ((data = myReadable.read(2)) !== null) {
    console.log(data.toString())
  }
 }) */


 myReadable.on('data', (chunk) => {
  console.log(chunk.toString())
 })
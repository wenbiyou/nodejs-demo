const EventEmitter = require('events')

const ev = new EventEmitter()

/* // on
ev.on('事件1', () => {
  console.log('事件1执行了')
})
ev.on('事件1', () => {
  console.log('事件1再次执行')
})

// emit
ev.emit('事件1')
ev.emit('事件1') */

/* // once
ev.once('事件2', () => {
  console.log('事件2执行了')
})
ev.once('事件2', () => {
  console.log('事件2再次执行了')
})

ev.emit('事件2')
ev.emit('事件2') */

/* // off
let cbFn = (...args) => {
  console.log(args)
}
ev.on('事件3', cbFn)

// ev.emit('事件3')
// ev.off('事件3', cbFn)
ev.emit('事件3', 1, 2, 3) */


/* ev.on('A', function () {
  console.log(this)
})
ev.on('A', function () {
  console.log(2222)
})
ev.on('B', function () {
  console.log('BBB')
})

ev.emit('A') */


const fs = require('fs')

const crs = fs.createReadStream()

crs.on('data')

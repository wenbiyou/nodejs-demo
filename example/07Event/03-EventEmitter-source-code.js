const EventEmitter = require('events')

const ev = new EventEmitter()

ev.on('A', () => {
  console.log('A事件执行了')
})
ev.on('A', () => {
  console.log('A事件执行了----2')
})

ev.emit('A')
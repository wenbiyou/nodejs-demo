function MyEvent () {
  // 1. 准备一个数据结构用于缓存订阅者信息
  this._events = Object.create(null)
}

MyEvent.prototype.on = function (type, callback) {
  if (this._events[type]) {
    this._events[type].push(callback)
  } else {
    this._events[type] = [callback]
  }
}

MyEvent.prototype.emit = function (type, ...args) {
  if (this._events && this._events[type].length) {
    this._events[type].forEach((callback) => {
      callback.call(this, ...args)
    })
  }
}

MyEvent.prototype.off = function (type, callback) {
  if (this._events && this._events[type]) {
    this._events[type] = this._events[type].filter(item => {
      return item !== callback && item.link !== callback
    })
  }
}

MyEvent.prototype.once = function (type, callback) {
  let foo = function (...args) {
    callback.call(this, ...args)
    this.off(type, foo)
  }
  foo.link = callback
  this.on(type, foo)
}

let ev = new MyEvent()

let fn = function(...data) {
  console.log('A事件执行了', data)
}
// ev.on('A', fn)
// ev.on('A', () => {
//   console.log('hello world')
// })

// ev.emit('A', 1, 2)
// ev.emit('A', '前')
// ev.off('A', fn)
// ev.emit('A', '后')

ev.once('A', fn)
ev.emit('A', '前')
ev.off('A', fn)
ev.emit('A', '后')
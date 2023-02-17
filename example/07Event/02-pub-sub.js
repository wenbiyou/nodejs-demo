class PubSub {
  constructor() {
    this._events = {}
  }

  // 注册
  subscribe (event, callback) {
    if (this._events[event]) {
      // 如果当前 event 存在，往后添加当前事件
      this._events[event].push(callback)
    } else {
      // 之前没有订阅过
      this._events[event] = [callback]
    }
  }

  // 发布
  publish (event, ...args) {
    const items = this._events[event]
    if (items && items.length) {
      items.forEach(function (callback) {
        callback.call(this, ...args)
      })
    }
  }

}

let ps = new PubSub()
ps.subscribe('A', () => {
  console.log('A事件执行了')
})
ps.subscribe('A', () => {
  console.log('A事件执行了 --- 2')
})

ps.publish('A')
ps.publish('A')
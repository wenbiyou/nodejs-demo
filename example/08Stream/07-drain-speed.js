/**
 * 将 “极兔国际”写入指定文件
 * 01 一次性写入
 * 02 分批写入
 * 
 * 从内存角度对比 : 大内存文件短时溢出，一瞬间撑满
 */

let fs = require('fs')

let ws = fs.createWriteStream('test.txt', {
  highWaterMark: 3
})

// 一次性
// ws.write('极兔国际')

// 分批
let source = "极兔国际".split('')
let num = 0
let flag = true

function executeWrite() {
  flag = true
  while (num !== source.length && flag) {
    flag = ws.write(source[num])
    num++
  }
}

executeWrite()

ws.on('drain', () => {
  console.log('drain 事件执行了')
  executeWrite()
})

// pipe



const fs = require('fs')
const path = require('path')

/**
 * 1. 接收 a/b/c 这类路径
 * 2. 利用 / 分隔符拆分， ['a', 'b', 'c']
 * 3. 对上述数组进行遍历，拿到每一项与前一项进行拼接 /
 * 4. 判断一个当前拼接后的路径是否具有可操作的权限，如果有则存在，否则执行创建
 */
function makeDirSync (dirPath) {
  let items = dirPath.split(path.sep)
  console.log(items)
  for (let i=1; i<=items.length; i++) {
    let dir = items.slice(0, i).join(path.sep)
    try {
      fs.accessSync(dir)
    } catch (err) {
      fs.mkdirSync(dir)
    }
  }
}

// makeDirSync('a\\b\\c') // window
makeDirSync('a/b/c')
const path = require('path')

// console.log(__filename)

// 1. 获取基础名称
// console.log(path.basename(__filename))
// console.log(path.basename(__filename, '.js'))
// console.log(path.basename(__filename, '.css'))
// console.log(path.basename('/a/b/c'))
// console.log(path.basename('/a/b/c/'))

// 2. 获取路径目录名(路径)
// console.log(path.dirname(__filename))
// console.log(path.dirname(__dirname))
// console.log(path.dirname('/a/b/c/'))

// 3. 获取路径扩展名
// console.log(path.extname(__filename))
// console.log(path.extname(__dirname))
// console.log(path.extname('/a/b/index.html.js.css'))
// console.log(path.extname('/a/b/index.html.js.'))

// 4. 解析路径
/**
 * 01 接收一个路径，返回一个对象，包含不同的信息
 * 02 root dir base ext name
 */
// const obj = path.parse('/a/b/c/index.html')
// const obj = path.parse('/a/b/c')
// const obj = path.parse('./a/b/c')
// console.log(obj)

// 5. 序列化路径
// const obj = path.parse('./a/b/c')
// console.log(path.format(obj))

// 6. 判断当前路径是否绝对路径
// console.log(path.isAbsolute('foo'))
// console.log(path.isAbsolute('/foo'))
// console.log(path.isAbsolute('//foo'))


// 7. 路径拼接
// console.log(path.join('a/b', 'c', 'index.html'))
// console.log(path.join('a/b/', 'c', 'index.html'))
// console.log(path.join('/a/b', 'c', 'index.html'))
// console.log(path.join('/a/b', 'c', '../', 'index.html'))
// console.log(path.join(''))

// 8. 规范化路径
// console.log(path.normalize(''))
// console.log(path.normalize('a/b/c/d'))
// console.log(path.normalize('a////b/c../d'))
// console.log(path.normalize('a////b/c/../d'))
// console.log(path.normalize('a//\b/c/d'))

// 9. 绝对路径 path.resolve([from], to)
// console.log(path.resolve())
console.log(path.resolve('a', 'b'))
console.log(path.resolve('a', '../b'))
console.log(path.resolve('index.html'))


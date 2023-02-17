const fs = require('fs')
const path = require('path')
const marked = require('marked')
const browserSync = require('browser-sync')

/**
 * 1.读取 md 和 css 内容
 * 2.将上述读取内容替换占位符，生成一个最终要展示的 html 字符串
 * 3.将上述 html 字符串写入指定 html 文件中
 * 4. 监听 md 文档内容的变更，然后更新html 内容
 * 5. 使用 browser-sync 来实时展示 html 内容
 */

let mdPath = path.join(__dirname, process.argv[2])
let cssPath = path.resolve('github.css')
let htmlPath = mdPath.replace(path.extname(mdPath), '.html')

fs.readFile(mdPath, 'utf-8', (err, data) => {
  // 将 md -> html
  let htmlStr = marked.parse(data)
  fs.readFile(cssPath, 'utf-8', (err, data) => {
    // 替换 
    let retHtml = temp.replace('{{content}}', htmlStr).replace('{{style}}', data)
    fs.writeFile(htmlPath, retHtml, (err) => {
      console.log('html 生成成功了')
    })
  })
})

fs.watchFile(mdPath, (curr, prev) => {
  if (curr.mtime !== prev.mtime) {
    fs.readFile(mdPath, 'utf-8', (err, data) => {
      // 将 md -> html
      let htmlStr = marked.parse(data)
      fs.readFile(cssPath, 'utf-8', (err, data) => {
        // 替换 
        let retHtml = temp.replace('{{content}}', htmlStr).replace('{{style}}', data)
        fs.writeFile(htmlPath, retHtml, (err) => {
          console.log('html 更新成功了')
        })
      })
    })

  }
})

browserSync.init({
  browser: '',
  server: __dirname,
  watch: true,
  index: path.basename(htmlPath)
})

const temp = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title></title>
        <style>
            .markdown-body {
                box-sizing: border-box;
                min-width: 200px;
                max-width: 1000px;
                margin: 0 auto;
                padding: 45px;
            }
            @media (max-width: 750px) {
                .markdown-body {
                    padding: 15px;
                }
            }
            {{style}}
        </style>
    </head>
    <body>
        <div class="markdown-body">
            {{content}}
        </div>
    </body>
    </html>
`

const http = require("http");
const fs = require("fs");
const path = require("path");
// 创建服务  (开店)
let server = http.createServer((req, res) => {
    // 访问的路径
    let pathname = req.url;
    // console.log(pathname)
    // 逻辑判断 
    pathname = pathname === "/" ? "index.html" : pathname

    /**
     *  index.html
     *  css/index.css
     *  js/index.js
     *  fsvicon.ico
     *  通过观察 静态资源都是一个文件  是文件就行扩展名  就应该包含一个 .
     * 
     */
    // 1、静态资源(归类)
    // 判断是否存在扩展名
    if (path.extname(pathname)) {
        // 返回静态资源
        res.end(fs.readFileSync(path.join("public", pathname), "utf-8"))
        return;
    }

    //2、接口 
    if (pathname === "/api/login") {
        res.end("123")
    }


})
//  监听
server.listen(8080, () => {
    console.log("服务器在8080端口启动了")
})
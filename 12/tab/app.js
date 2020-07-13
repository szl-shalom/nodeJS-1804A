const http = require("http");
const path = require("path");
const url = require("url");
const fs = require("fs");
const Mock = require("mockjs");
const data = Mock.mock({
    "list|4": [{
        "name":"@cword(4)",
        "children|3":[{
            "title":"@ctitle",
            "color":"@color",
            "desc":"@cword(20)"
        }]
    }]
})
http.createServer((req, res) => {
    // 获取访问的路径
    let {
        pathname
    } = url.parse(req.url, true);
    // 判断是不是根路径 是根路径赋值为index.html
    pathname = pathname === "/" ? "index.html" : pathname
    // 处理网站的图标
    if (pathname === "/favicon.ico") {
        return;
    }
    // 判断是不是静态资源  
    if (path.extname(pathname)) {
        res.end(fs.readFileSync(path.join("public", pathname), "utf-8"))
    }

    // 处理接口
    if (pathname === "/api/list") {
        res.end(JSON.stringify(data))
    }
}).listen(8080, () => {
    console.log("服务器在8080端口启动了！！")
})
const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");
const data = JSON.parse(fs.readFileSync("mock/data.json", "utf8"));
console.log(data)
http.createServer((req, res) => {
    let {
        pathname
    } = url.parse(req.url, true);
    pathname = pathname === "/" ? "index.html" : pathname;
    if (pathname === "/favicon.ico") return;
    if (path.extname(pathname)) {
        res.end(fs.readFileSync(path.join("public", pathname), "utf-8"))
    }
    // 求情数据接口 
    if (pathname === "/api/list") {
        res.end(JSON.stringify(data))
    }

    // 删除接口
    if (pathname === "/api/del") {
        let {
            index
        } = url.parse(req.url, true).query;
        data.splice(index, 1);
        fs.writeFileSync("mock/data.json", JSON.stringify(data))
        res.end("ok")
    }
}).listen(8080)
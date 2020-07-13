const fs = require("fs");
const path = require("path");
const url = require("url");
const http = require("http");
const data = JSON.parse(fs.readFileSync("./mock/data.json","utf-8"));
http.createServer((req, res) => {
    let { pathname } = url.parse(req.url,true);
    pathname = pathname === "/" ? "login.html" : pathname;
    if(pathname === "/favicon.ico") return ;
    // 处理静态资源
    if(path.extname(pathname)){
        res.end(fs.readFileSync(path.join("public",pathname),"utf-8"))
    }
    // 处理接口

    // 登录接口
    if(pathname==="/api/login"){
        // 解构出来 用户名和密码
        let { username,password } = url.parse(req.url,true).query;
        if(username === "admin" && password === "123456"){
            res.end("1")
        }else{
            res.end("0")
        }
    }
    // 获取数据接口
    if(pathname==="/api/list"){
        // 设置响应体格式
        res.setHeader("Content-type","application/json")
        res.end(JSON.stringify(data))
    }
}).listen(8080, () => {
    console.log("服务器在8080端口运行")
})
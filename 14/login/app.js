const http = require("http")
const fs = require("fs");
const path = require("path");
const url = require("url");
const arr = [{
    username: "张三",
    password: "123"
}, {
    username: "李四",
    password: "666666"
}]
// 服务
const server = (req, res) => {
    // 获取访问的路径
    let {
        pathname
    } = url.parse(req.url, true);
    // 判断是不是根路径
    pathname = pathname === "/" ? "login.html" : pathname;
    // 判断是不是静态资源
    if (path.extname(pathname)) {
        // 判断静态资源文件是否存在
        let exit = fs.existsSync(path.join("public", pathname))
        if (exit) {
            // 存在返回静态资源
            res.end(fs.readFileSync(path.join("public", pathname), "utf-8"));
            return;
        } else {
            // 不存在返回404页面
            res.end(fs.readFileSync(path.join("public", "404.html"), "utf-8"))
        }

    }
    // 接口
    // 登录
    if (pathname === "/api/login") {
        // 处理post 请求
        // 接受数据post
        let str = "";
        // 持续接受流式文件  使用data事件
        req.on("data", (chunk) => {
            str += chunk //拼接数据
        })
        // 数据发送完毕  使用end 事件
        req.on("end", () => {
            let {
                username,
                password
            } = JSON.parse(str);
            let flag = arr.some(item => item.username === username && item.password === password)
            flag ? res.end("1") : res.end("0")
        })
    }
    // 注册接口
    if (pathname === "/api/register") {
        let str = "";
        req.on("data", (chunk) => {
            str += chunk
        })

        req.on("end", () => {
            let data = JSON.parse(str);
            let flag = arr.some(item => item.username === data.username);
            if (flag) {
                res.end("0")
            } else {
                arr.push(data)
                res.end("1")
            }
        })
    }


}


http.createServer(server).listen(8080, () => {
    console.log("server runing in port 8080 !")
})
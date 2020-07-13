const http = require("http");
const {readFileSync} = require("fs");
// 创建服务
let server = http.createServer((req, res) => {
    // req 请求体
    // res 回应体

    // 判断路径
    if (req.url === "/") {
        let str = readFileSync("src/index.html", "utf-8")
        res.end(str)
    } else {
        res.end("1")
    }
})

// 监听端口
server.listen(8080, () => {
    console.log("服务器在127.0.0.1:8080启动")
})
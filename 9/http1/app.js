const fs = require("fs");
const http = require("http");



let server = http.createServer((req, res) => {
    if (req.url === "/") {
        let str = fs.readFileSync("index.html", "utf-8")
        res.end(str)
    }
})


server.listen(3000, () => {
    console.log("服务器在3000端口运行")
})
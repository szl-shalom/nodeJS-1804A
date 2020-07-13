const http = require("http"); //引入http模块
const path = require("path"); //引入path模块
const url = require("url"); //引入url模块
const fs = require("fs"); //引入fs模块
http.createServer((req, res) => {
    // 获取访问的路径  用url.parse 格式化字符串路径 
    let {
        pathname
    } = url.parse(req.url, true);
    // 判断访问的是不是根路径  是根路径 返回login.html
    pathname = pathname === "/" ? "login.html" : pathname;
    // 处理网站的图标
    if (pathname === "/favicon.ico") return;
    // 处理静态资源  使用 path.extname 判断是否有后缀名的点
    if (path.extname(pathname)) {
        res.end(fs.readFileSync(path.join("public", pathname), "utf-8"));
        return;
    }
    // 处理接口
    // 登录接口
    if (pathname === "/api/login") {
        // 解构出来username和password
        // url.parse会将地址栏字符串的数据转化为对象  查询参数在query字段上
        let {
            username,
            password
        } = url.parse(req.url, true).query;
        if (username === "张三" && password === "123") {
            res.end("1")
        }else{
            res.end("0")
        }
    }

    if(pathname==="/api/list"){
        res.end(fs.readFileSync(path.join("mock/list.txt"),"utf-8"))
    }


}).listen(8080, () => {
    console.log("服务在8080端口启动了")
})
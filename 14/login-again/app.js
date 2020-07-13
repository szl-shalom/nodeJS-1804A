const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");

const server = (req, res) => {
    // 获取访问的路径
    let {
        pathname
    } = url.parse(req.url, true);
    // 判断是不是根路径  是 返回login  不是 返回本身
    pathname = pathname === "/" ? "login.html" : pathname;
    // 处理 图标
    if (pathname === "/favicon.ico") return;
    // 处理静态资源
    if (path.extname(pathname)) {
        //  获取静态资源的public下的目录
        let target = path.join("public", pathname)
        // 是否存在
        if (fs.existsSync(target)) {
            // 正确返回静态资源
            res.end(fs.readFileSync(target, "utf-8"))
        } else {
            // 返回404
            res.end(fs.readFileSync("public/404.html", "utf-8"))
        }
        // let exit = fs.existsSync(path.join("public", pathname))
        // res.end(fs.readFileSync(path.join("public", `${exit ? pathname :"404.html"}`),"utf-8"));
    }

    if(pathname === "/api/login"){
        let str = ""
        // 接受流式数据  data事件    chunk流式数据
        req.on("data",(chunk)=>{
            str +=chunk;
        })  
        // 数据接受完毕  end事件
        req.on("end",()=>{
            // 解构出来 接受的数据  { username：值，password:值 }
            let { username,password  } = JSON.parse(str);
            // 判断是否正确
            if(username === "张三" && password === "123"){
                res.end("1")
            }else{
                res.end("0")
            }
        })
    }
}

http.createServer(server).listen(8080, () => console.log("server runing in port 8080 !!"))
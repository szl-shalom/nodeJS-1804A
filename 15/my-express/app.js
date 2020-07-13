// 引入express 第三方模块
const express = require("express");
// 初始化一个express顶层对象
const app = express();

// 处理静态资源  应用级中间件
app.use(express.static("public"))
// 处理post  json
app.use(express.json())
// 监听

app.post("/api/login",(req,res)=>{
   if(req.body.username === "账单" && req.body.password === "123"){
       res.send("1")
   }else{
       res.send("0")
   }
})



// 起服务
app.listen(8080, () => console.log("服务器在8080端口启动"))
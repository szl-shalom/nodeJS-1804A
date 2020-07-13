const express = require("express");
const app = express();

// 处理资源
app.use(express.static("public"))
// 处理post json
app.use(express.json())
// 处理表单
app.use(express.urlencoded())

app.post("/api/login",(req,res)=>{
    let { username,password } = req.query;
    if(username === "张三" && password==="123"){
        res.send("登录成功")
    }else{
        res.send("登录失败")
    }
})

app.listen(8080, () => console.log("8080"))
const express = require("express");
const app = express();
const fs = require("fs");
let code; //验证码
const read = (url, encode = "utf-8") => {
    return new Promise((resolve, reject) => {
        fs.readFile(url, encode, (err, data) => {
            if (err) {
                reject(err)
                return;
            }
            resolve(JSON.parse(data))
        })
    })
}


// 处理静态资源 
app.use(express.static('public', {
    index: "login.html", //访问根路径 返回login.html
}))
// 处理 post json 
app.use(express.json())
// 处理表单  
app.use(express.urlencoded())
// 处理登录接口
app.post("/api/login", (req, res) => {
    // 解构用户 密码
    let { username, password } = req.body;
    // 先验证验证码
    if(code !== req.body.code ){
        res.send({
            code:2,
            mess:"验证码不正确"
        })
        return ;
    }
    read("mock/data.json").then(data => {
        // 验证用户是否存在
        let flag = data.some(item => item.username === username && item.password === password);
        // 返回信息
        flag ? res.send({  code: 1,mess:"登录成功" }) : res.send({ code: 0,mess:"账户密码不正确"  });
    })
})
// 处理验证码接口
app.get("/api/getCode",((req,res)=>{
    code = Math.random().toString(36).slice(2,8);
    console.log(code)
    res.send(code)
}))

// 处理404页面
app.all("*",(req,res)=>res.send("404 页面不存在 ！！！！！！"))
// 起服务
app.listen(8080, () => console.log("服务器启动了！！！"));
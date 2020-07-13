const express = require("express");
const app = express(); //获取顶级express对象
const path = require("path"); //引入核心path模块
const fs = require("fs"); //引入核心fs模块
const {
    json
} = require("express");
const {
    send
} = require("process");
// 处理静态资源  
app.use(express.static(path.resolve(__dirname, "public")))
// 处理post json处理
app.use(express.json())


// 处理登录接口
app.post("/api/login", (req, res) => {
    // 获取mock下的user.json数据
    let data = JSON.parse(fs.readFileSync("mock/user.json", "utf8"));
    // 把用户名和密码解构出来
    let {
        username,
        password
    } = req.body;
    console.log(username, password);
    // 验证用户是否存在
    let flag = data.some(item => item.username === username && item.password === password);
    // 为真  返回{ code :1 }  为假返回 { code :0 }
    flag ? res.send({
        code: 1
    }) : res.send({
        code: 0
    })
})

// 处理注册接口
app.post("/api/register", (req, res) => {
    // 获取user.json数据
    let data = JSON.parse(fs.readFileSync("mock/user.json"), "utf-8")
    // 解构用户名和密码
    let {
        username,
        password
    } = req.body;
    // 验证是否存在
    let flag = data.some(item => item.username === username);
    if (flag) {
        // 说明本地数据存在
        res.send({
            code: 0,
            mess: "用户名已存在！"
        })
    } else {
        // 说明本地数据不存在
        res.send({
            code: 1,
            mess: "注册成功！"
        });
        // 推入数据
        data.push({
            username,
            password
        })
        // 跟新本地数据
        fs.writeFileSync("mock/user.json", JSON.stringify(data))
    }

})

// 获取数据接口
app.get("/api/list", (req, res) => {
    res.send(fs.readFileSync("mock/data.json", "utf-8"))
})
// 添加数据接口
app.get("/api/list/add", (req, res) => {
    // 获取本地的数据
    let data = JSON.parse(fs.readFileSync("mock/data.json", "utf-8"))
    // 将传入过来的数据req.query   推入数据
    data.list.push(req.query)
    // 更新本地数据
    fs.writeFileSync("mock/data.json", JSON.stringify(data));
    // 返回状态
    res.send({
        code: 1,
        mess: "提交成功"
    })
})

// 删除数据接口
app.get("/api/list/del",(req,res)=>{
    let { id } = req.query; //解构出来id
    // 读取数据
    let data = JSON.parse(fs.readFileSync("mock/data.json","utf-8"))
    // 筛选数据  删除id一样的数据
    data.list = data.list.filter(item=>item.id !==id);
    // 写入
    fs.writeFileSync("mock/data.json",JSON.stringify(data));
    res.send({
        code:1,
        mess:"删除成功"
    })

})



// 监听端口
app.listen(8080, () => console.log("server is running in port 8080 !"))
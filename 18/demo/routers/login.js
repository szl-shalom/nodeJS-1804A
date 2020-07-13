const express = require("express");
// 新建一个路由
const route = express.Router();
const fs = require("fs");
// 抛出
module.exports = route;
// 登录   接口 /api/login
route.post("/", (req, res) => {
    // 接受数据  注意post  
    // post的数据 绑定在请求体的body (中间件帮你绑定的)
    let {
        username,
        password
    } = req.body;
    // 读取本地 mock/user.json文件
    let data = JSON.parse(fs.readFileSync("mock/user.json", "utf-8"))
    // 验证用户是否存在
    let flag = data.some(item => item.username === username && item.password === password);
    // 根据结果返回
    flag ?
        res.send({
            code: 1,
            token: username, //用户唯一标识符
        }) :
        res.send({
            code: 0,
        })
})
const express = require("express");
const route = express.Router();
const fs = require("fs");
module.exports = route;

route.post("/", (req, res) => {
    let {
        username,
        password
    } = req.body;
    let data = JSON.parse(fs.readFileSync("mock/data.json", "utf-8"))
    // 验证用户名是否存在  
    let flag = data.some(item => item.username === username && item.password === password);
    if (flag) {
        res.send({
            code: 1,
            mess: "登录成功"
        })
    } else {
        let exitUsername = data.some(item => item.username === username)
        if (exitUsername) {
            res.send({
                code: 0,
                mess: "此用户已存在"
            })
        } else {
            data.push(req.body);
            fs.writeFileSync("mock/data.json", JSON.stringify(data), "utf-8");
            res.send({
                code: 1,
                mess: "登录成功"
            })
        }
    }
})
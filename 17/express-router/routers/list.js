/**
 * desc: 数据接口路由
 */

const express = require("express");
// 新建一个路径实例
const route = express.Router()
// 监听
route.get("/", (req, res) => {
    res.send("12312312312")
})


route.get("/getData", (req, res) => {
    res.send("getData 路由")
})

// 抛出
module.exports = route;
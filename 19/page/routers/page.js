const express = require("express");
const route = express.Router();
const fs = require("fs");
module.exports = route;


// 分页接口
route.get("/getData", (req, res) => {
    // 获取每页显示的个数以及当前页码
    let {
        pageNum,
        pageIndex
    } = req.query;

    // 读取本地数据
    let data = JSON.parse(fs.readFileSync("mock/data.json", "utf-8"));
    // 限制最大值   
    if (pageIndex > Math.ceil(data.length / pageNum) - 1) {
        pageIndex = Math.ceil(data.length / pageNum) - 1
    }
    // 返回数据
    res.send({
        // 截取数据
        data: data.slice(pageIndex * pageNum, (+pageIndex + 1) * pageNum),
        // 返回分页器页码的个数（可以分成几组） 
        maxPageCode: Math.ceil(data.length / pageNum)
    })
})
const express = require("express");
const route = express.Router();
const fs = require("fs");
module.exports = route;




// 数据获取接口
route.get("/", (req, res) => {
    let data = JSON.parse(fs.readFileSync("mock/list.json", "utf-8"))
    res.send(data)
})



//模糊搜索接口
route.post("/filter", (req, res) => {
    let {
        name
    } = req.body;
    let data = JSON.parse(fs.readFileSync("mock/list.json", "utf-8"))
    let result = data.filter(item => {
        return item.name.includes(name)
    })
    res.send(result)
})
// 删除接口
route.post("/del", (req, res) => {
    let {
        id
    } = req.body;
    let data = JSON.parse(fs.readFileSync("mock/list.json", "utf-8"))
    data = data.filter(item => item.id !== id)
    fs.writeFileSync("mock/list.json", JSON.stringify(data));
    res.send({
        code: 1
    })
})

// 新增接口
route.post("/add", (req, res) => {
    let data = JSON.parse(fs.readFileSync("mock/list.json", "utf-8"));
    data.push(req.body);
    fs.writeFileSync("mock/list.json", JSON.stringify(data));
    res.send({
        code: 1
    })
})

// 编辑接口
route.post("/modify", (req, res) => {
    let {
        id
    } = req.body;
    let data = JSON.parse(fs.readFileSync("mock/list.json", "utf-8"));
    let result = data.find(item => item.id === id);
    Object.assign(result, req.body)
    fs.writeFileSync("mock/list.json", JSON.stringify(data));
    res.send({
        code: 1
    })
})
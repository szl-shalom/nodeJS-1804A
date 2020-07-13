const express = require("express");
const app = express();
const fs = require("fs");
app.listen(9000);
app.use(express.static("public"));


app.get("/api/filter", (req, res) => {
    // 获取搜索的呢日用
    let {
        name
    } = req.query;
    // 读取数据
    let data = JSON.parse(fs.readFileSync("mock/data.json", "utf-8"));
    // 模糊搜索
    let result = data.filter(item => {
        // 通过字符串includes方法
        // 返回值为真  该数据要
        // 返回值为假  不要
        return item.name.includes(name)
    })
    //返回
    res.send(result)
})
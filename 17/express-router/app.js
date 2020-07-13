const express = require("express");
const app = express();
const list = require("./routers/list");

//处理post json
app.use(express.json());
// 处理表单
app.use(express.urlencoded())
// 处理静态资源
app.use(express.static("public"))

// 数据路由
app.use("/api/list/qwe", list)

app.listen(8080, () => console.log(8080))
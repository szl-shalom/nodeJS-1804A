const express = require("express");
const app = express();
const loginRouter = require("./routes/login")
const tableRouter = require("./routes/table")
// 起服务
app.listen(8080, () => console.log("服务在8080启动"))
// 静态资源
app.use(express.static("public", {
    index: "login.html" //打开根路径显示那个页面 默认是 index.html
}))
// post json
app.use(express.json())
// 表单
app.use(express.urlencoded());
// 路由
app.use("/api/login", loginRouter);
app.use("/api/table", tableRouter)
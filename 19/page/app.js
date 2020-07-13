const express = require("express");
const app = express();
const pageRouter = require("./routers/page");
app.listen(8080, () => console.log("服务器在8080端口启动了"));

// 资源
app.use(express.static("public"))
// 处理post json 表单
app.use(express.json())
app.use(express.urlencoded())
// 分页路由
app.use("/api/page", pageRouter);
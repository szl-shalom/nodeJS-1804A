const express = require("express");
const app = express();
const loginRouter = require("./routes/login_route");
const peopleRouter = require("./routes/people_route");
app.listen(8080, () => console.log("服务在8080端口启动了"));


// 处理资源
app.use(express.static("public"))
// 处理 post json
app.use(express.json())
app.use(express.urlencoded())

// 登录路由
app.use("/api/login", loginRouter)
// 联系人路由
app.use("/api/people", peopleRouter)
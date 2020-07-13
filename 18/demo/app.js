const express = require("express");
const app = express();
// 引入登录路由
const loginRouter = require("./routers/login")
// 引入数据路由
const dataRouter = require("./routers/data");
app.listen(8080, () => console.log(8080));

// 静态资源
app.use(express.static("public", {
    index: "login.html" //访问根路径 返回的页面
}));
// 处理post json
app.use(express.json());
// 处理表单
app.use(express.urlencoded());
// 启用模板ejs引擎
app.set("view engine", "ejs");
// 处理接口

// 登录路由
app.use("/api/login", loginRouter)
// 数据路由
app.use("/api/data", dataRouter);


// 处理接口或者静态资源找不到返回404  放在逻辑最后面
app.all("*", (req, res) => {
    res.render("404", {
        path: req.url
    })
})
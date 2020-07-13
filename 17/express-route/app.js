const express = require("express");
const app = express();
const loginRouter = require("./routes/login");
const fs = require("fs");
// 表单 中间见·
app.use(express.urlencoded())
// 静态资源 中间件
app.use(express.static("public", {
    index: "login.html"
}));
// post json 中间件
app.use(express.json());
// 使用ejs模板引擎
app.set("view engine", "ejs")
// 渲染目录
app.set("views", "views")

// 登录路由
app.use("/api/login", loginRouter);
// 匹配
app.get("*", (req, res) => {
    res.render("404", {
        title: "哈哈，你页面找不到了吧",
        url: req.url
    })
})

app.listen(8080, () => {
    console.log(8080)
})
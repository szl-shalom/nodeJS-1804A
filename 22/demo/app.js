const express = require("express");
const app = express();
const loginRouter = require("./routes/login");
const listRouter = require("./routes/list")
app.listen("8080", () => console.log("服务器在8080启动了"))



app.use(express.static("public", {
    index: "login.html"
}))
app.use(express.json())
app.use(express.urlencoded())



app.use("/api/login", loginRouter)
app.use("/api/list", listRouter)
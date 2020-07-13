const express = require("express");
const app = express();
app.listen(8080)
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded())

app.post("/login", (req, res) => {
    res.send(`用户名:${req.body.username}----密码${req.body.password}`)
})
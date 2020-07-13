const express = require("express");
const fs = require("fs");
const route = express.Router();
module.exports = route;

route.post("/", (req, res) => {
    let {
        username,
        password
    } = req.body;
    console.log(username, password)
    let data = JSON.parse(fs.readFileSync("mock/user.json", "utf-8"));

    let flag = data.some(item => item.username === username && item.password === password)

    if (flag) {
        res.send({
            code: 1,
            token: username
        })
    } else {
        res.send({
            code: 0,
        })
    }
})
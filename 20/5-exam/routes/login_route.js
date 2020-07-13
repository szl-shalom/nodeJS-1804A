const express = require("express");
const route = express.Router();
module.exports = route;




route.post("/", (req, res) => {
    let {
        username,
        password
    } = req.body;
    if (username === "admin" && password === "123") {
        res.send({
            code: 1
        })
    } else {
        res.send({
            code: 0
        })
    }
})
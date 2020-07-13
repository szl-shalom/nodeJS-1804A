const express = require("express");
const route = express.Router();
const fs = require("fs");
module.exports = route;




route.get("/getData", (req, res) => {
    let data = JSON.parse(fs.readFileSync("mock/list.json"))
    res.send(data)
})


route.post("/del", (req, res) => {
    let {
        id
    } = req.body;
    let data = JSON.parse(fs.readFileSync("mock/list.json"))
    data = data.filter(item => item.id !== id);
    fs.writeFileSync("mock/list.json", JSON.stringify(data));
    res.send({
        code: 1
    })
})

route.post("/filter", (req, res) => {
    let {
        val
    } = req.body;
    let data = JSON.parse(fs.readFileSync("mock/list.json"))
    data = data.filter(item => item.name.includes(val));
    res.send(data)
})


route.post("/add", (req, res) => {
    let data = JSON.parse(fs.readFileSync("mock/list.json"))
    data.push(req.body)
    fs.writeFileSync("mock/list.json", JSON.stringify(data));
    res.send({
        code: 1
    })
})
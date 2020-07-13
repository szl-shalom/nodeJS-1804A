const express = require("express");
const route = express.Router();
const fs = require("fs");
module.exports = route;



route.get("/", (req, res) => {
    res.send(fs.readFileSync("mock/data.json", "utf-8"))
})


route.post("/add", (req, res) => {
    let data = JSON.parse(fs.readFileSync("mock/data.json", "utf-8"))
    data.push(req.body);
    fs.writeFileSync("mock/data.json", JSON.stringify(data));
    res.send({
        code: 1
    })
})

route.post("/filter",(req,res)=>{
    let { val } = req.body
    let data = JSON.parse(fs.readFileSync("mock/data.json","utf-8"))
    res.send(data.filter(item=>{
        return item.name.includes(val);
    }))
})
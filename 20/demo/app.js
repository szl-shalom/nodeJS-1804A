const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

app.get("/public", (req, res) => {
    //   /public??1.js,2.js

    let pathname = req.url.split("??")[0].slice(1);
    let arr = req.url.split("??")[1].split(",")
    let str = "";
    arr.forEach(item => {
        str += fs.readFileSync(path.join(pathname, item), "utf-8")
    })
    res.send(str)
})

app.listen(8080)
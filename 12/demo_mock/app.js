const Mock = require("mockjs")
const fs = require("fs");
let res = Mock.mock({
    "list|2-3": [{
        "name": "@cname",
        "flag": "@boolean",
        "color": "@color",
        "word": "@cword(20)",
        "title": "@ctitle",
        "count|100-1000": 1,
        "url": "@image"
    }]
})
fs.writeFileSync("data.json",JSON.stringify(res))

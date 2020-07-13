const Mock = require("mockjs");
const fs = require("fs");


let data = Mock.mock({
    "list|10": [{
        "username": "@cname",
        "password": "@word(8,16)"
    }]
})

fs.writeFileSync("data.json", JSON.stringify(data.list), "utf-8")
const Mock = require("mockjs");
const fs = require("fs");



let data = Mock.mock({
    "user|5": [{
        "username": "@cname",
        "password": "@word(6,12)"
    }],
    "list|10": [{
        "title": "@ctitle",
        "name": "@cname",
        "id": "@id",
        "datetime": "@datetime"
    }]
})

fs.writeFileSync("user.json", JSON.stringify(data.user))
fs.writeFileSync("list.json", JSON.stringify(data.list))
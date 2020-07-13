const Mock = require("mockjs");
const fs = require("fs");

let data = Mock.mock({
    "user|5": [{
        "username": "@cname",
        "password": "@word(6,12)"
    }],
    "list|6-10": [{
        "id": "@id",
        "first": "@first",
        "last": "@last",
        "name": "@name"
    }]
})

fs.writeFileSync("user.json", JSON.stringify(data.user))
fs.writeFileSync("list.json", JSON.stringify(data.list))
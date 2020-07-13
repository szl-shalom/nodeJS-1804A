const Mock = require("mockjs");
const {
    writeFileSync
} = require("fs");

let data = Mock.mock({
    "list|10": [{
        "username": "@cname",
        "password": "@word(6,16)"
    }]
})


writeFileSync("data.json", JSON.stringify(data.list), "utf-8")
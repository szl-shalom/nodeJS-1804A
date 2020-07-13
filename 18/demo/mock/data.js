const Mock = require("mockjs");
const fs = require("fs");


let data = Mock.mock({
    "user|600": [{
        "username": "@cname",
        "password": "@word(6,12)",
        "id": "@id"
    }]
})

fs.writeFileSync("user.json", JSON.stringify(data.user))
const Mock = require("mockjs");
const fs = require("fs");

let data = Mock.mock({
    "杜世成|20": [{
        "name": "@cname",
        "tel|10000000000-19999999999": 1,
        "email": "@email",
        "k_name": "@cname",
        "f_name": "@cname",
    }]
})

fs.writeFileSync("data.json", JSON.stringify(data["杜世成"]))
const Mock = require("mockjs");
const fs = require("fs");
let data = Mock.mock({
    "list|100": [{
        "name": "@cname",
        "id": "@id"
    }]
})


fs.writeFileSync("data.json", JSON.stringify(data.list))
const Mock = require("mockjs");
const fs = require("fs");



fs.writeFileSync("data.json", JSON.stringify(Mock.mock({
    "list|6": [{
        "title": "@ctitle",
        "name": "@cname",
        "time": "@date",
        "id": "@id",
    }]
})))
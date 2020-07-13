const Mock = require("mockjs");
const fs = require("fs");
let data = Mock.mock({
    "list|100-300":[{
        "id":"@id",
        "title":"@ctitle",
        "datetime":"@datetime",
        "name":"@cname",
        "code|+1" : 1
    }]
})
fs.writeFileSync("data.json",JSON.stringify(data.list))
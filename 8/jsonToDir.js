const fs = require("fs");
const path = require("path");
const jsonToDir = data => {
    // 判断是还是文件夹
    if (data.type === "文件") {
        //写入文件
        fs.writeFileSync(data.name, "")
    } else {
        // 是文件夹
        // 创建文件夹
        fs.mkdirSync(data.name);
        // 循环数组  递归自己
        // 注意
        data.children.forEach(item => {
            // item.name = data.name + "/" + item.name
            console.log(item.name)
            jsonToDir(item)
        })
    }
}

let data = JSON.parse(fs.readFileSync("data.json", "utf-8"))
jsonToDir(data)
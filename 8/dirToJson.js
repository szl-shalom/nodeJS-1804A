const fs = require("fs");
const path = require("path");

const dirToJson = dir => {
    if (fs.statSync(dir).isFile()) {
        // 是文件
        return {
            type: "文件",
            name: path.basename(dir)
        }
    } else {
        //  是目录
        return {
            type: "文件夹",
            name: path.basename(dir),
            children: fs.readdirSync(dir).map(item => dirToJson(path.join(dir, item)))
        }
    }

}

let res = dirToJson(path.join(__dirname, "../"))
fs.writeFileSync("data.json", JSON.stringify(res))


// 3 姚建轩
// 4 金俊峰
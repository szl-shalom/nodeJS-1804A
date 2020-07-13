const fs = require("fs");

const delDir = path => {
    let arr = fs.readdirSync(path)
    if (arr.length) {
        // 该目录不为空
        // 循环子目录
        arr.forEach(item => {
            let state = fs.statSync(path + "/" + item);
            if (state.isFile()) {
                // 是文件
                fs.unlinkSync(path + "/" + item)
            } else {
                // 是目录
                delDir(path + "/" + item)
            }
        })
    }
    // 删除文件夹
    fs.rmdirSync(path)
}



delDir("qwe")
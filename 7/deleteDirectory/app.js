const fs = require("fs");
const deleteDiretory = path => {
    // 读取目录
    let arr = fs.readdirSync(path)
    if (arr.length) {
        // 不为空
        arr.forEach(item => {
            // 获取当前子目录的描述对象
            let res = fs.statSync(path + "/" + item)
            if (res.isFile()) {
                // 是文件
                fs.unlinkSync(path + "/" + item)
            } else {
                // 文件夹 
                deleteDiretory(path + "/" + item)
            }
        })

    }
    // 为空的 文件夹
    // 直接删除
    fs.rmdirSync(path);

}


deleteDiretory("123123")
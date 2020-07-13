const fs = require("fs");
const path = require("path");
const copyDir = (source, target) => {
    // 获取文件信息
    let state = fs.statSync(source);
    // 判断是不是文件
    if (state.isFile()) {
        // 是文件直接复制
        fs.copyFileSync(source, target)
    } else {
        // 是文件夹
        // 创建文件夹
        fs.mkdirSync(target)
        // 遍历文件夹 获取所有子目录  递归
        fs.readdirSync(source).forEach(item => {
            copyDir(path.join(source, item), path.join(target, item))
        })
    }
}
copyDir("../1", "qwe1")
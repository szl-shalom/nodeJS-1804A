const fs = require("fs");
const path = require("path");
const copyDir = (source, target) => {
    if (!fs.existsSync(source)) throw new Error("源文件不存在")
    if (fs.existsSync(target)) throw new Error("目标文件已经存在")
    // 创建文件夹
    fs.mkdirSync(target)
    // 获取源文件的所有子目录
    let arr = fs.readdirSync(source);
    // 循环遍历
    arr.forEach(item => {
        // 路径拼接
        let pathname = path.join(source, item)
        // 区分文件
        if (fs.statSync(pathname).isFile()) {
            // 说明文件
            // 判断大小
            if (fs.statSync(pathname).size > 1024 * 1024 * 4) {
                // 文件大小超过4MB
                let read = fs.createReadStream(pathname) //读取流
                let write = fs.createWriteStream(path.join(target, item)) //写入流
                read.pipe(write)
            } else {
                // 小于4M
                fs.copyFileSync(pathname, path.join(target, item))
            }
        } else {
            // 说明文件夹
            // 递归
            copyDir(pathname, path.join(target, item))
        }
    })
}
copyDir("src", "src1")
const fs = require("fs");
const path = require("path");
const copyDir = (source, target) => {
    // 1、容错处理   确认两个文件夹是存在
    if (!fs.existsSync(source)) throw new Error("源文件不存在")
    if (fs.existsSync(target)) throw new Error("目标文件存在")
    // 2、创建目标目录
    fs.mkdirSync(target)
    // 3、获取源文件所有子目录
    let arr = fs.readdirSync(source);
    // 4、循环目录
    arr.forEach(item => {
        // 5-1、源目录
        let midSource = path.join(source, item)
        // 5-2目标目录
        let midTarget = path.join(target, item)
        // 6、判断源目录是文件还是文件夹
        let stat = fs.statSync(midSource);
        if (stat.isFile()) {
            // 是文件
            // 在判断大小
            if (stat.size > 1024 * 1024 * 4) {
                // 大文件 超过4MB
                let read = fs.createReadStream(midSource) //读取流
                let write = fs.createWriteStream(midTarget) // 写入流
                read.pipe(write) //管道流
            } else {
                // 小文件  小于4MB
                fs.copyFileSync(midSource, midTarget)
            }
        } else {
            // 是文件夹
            // 递归调用
            copyDir(midSource, midTarget)
        }
    })
}



copyDir("src", "my")
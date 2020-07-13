// 读取 1.txt 内容 

const fs = require("fs");

// 引入fs核心模块
// let fs = require("fs");
// 读取文件
// fs.readFile("1.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log(data)
// })

// let res = fs.readFileSync("1.txt", "utf-8")
// console.log(res)

// 写入文件
// fs.writeFileSync("2.txt", "123123")

// 追加文件1
// fs.appendFile("2.txt", "嘿嘿", () => {})


// 删除文件
// fs.unlink("3.txt", (err) => {
//     console.log(err)
// })
// 

// 读取目录 返回改目录下所有子目录
// let arr = fs.readdirSync("2.txt")
// console.log(arr)

// 创建文件
// fs.writeFileSync("1.txt","")
// 创建文件夹（目录）
// fs.mkdirSync("")


// 删除文件夹 (必须为空)
// fs.rmdirSync("222")

// 判断文件是否存在  存在返回true 否则返回false
// let flag = fs.existsSync("222/2.txt")
// console.log(flag)

// 通过statSync 获取获取文件的描述
// 描述对象 isFile() 判断是不是文件
// 描述对象 isDirectory() 判断是不是文件夹
let res = fs.statSync("1.txt")
console.log(res.isFile())
console.log(res.isDirectory())
const fs = require("fs");

// console.log(fs)

// 1、fs 是nodeJS的核心模块（内置模块）
// 2、fs 文件操作系统，我们可以fs对象上的一些方法操作文件
// 3、比如创建文件 删除文件  写入文件 读取文件等等操作 
// 4、fs模块 一般情况下  每一种方法 有同步和异步两种方式
//    比如读取  readFile 异步
//             readFileSync 异步



//  path 路径
//  encoding 编码格式
//  callback  回调函数
// 第一类 读取 
//  fs.readFile(path,encoding,callback)
//  fs.readFileSync(path,encoding) 
//  第二类 写入
// path 写入文件的名字
// content 写入的内容  覆盖原来的内容
// fs.writeFileSync(path,content)
// fs.writeFileSync(path,content,callback)
//  第三类 删除
//  path 删除文件的名称
// fs.unlinkSync(path)
//  第四类 复制
// source 复制的文件
// target 复制的目标文件
// fs.copyFileSync(source,target)
//  第五类 改名
// source 要修改的文件的明细
// newName 新明细
// fs.renameSync(source, newName)


// fs.renameSync("index.js", "app.js")


//  第四类
// fs.mkdirSync
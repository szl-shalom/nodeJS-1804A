// 流式文件读取
const fs = require("fs");

// 读取流
let read = fs.createReadStream("1.mp4");
// 写入流
let write = fs.createWriteStream("2.mp4");
// 管道流
read.pipe(write)
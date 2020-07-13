// ES6 模块
// 1、export { 变量||函数 }  抛出的值必须在模块内定义了
//     有需要抛出别名   { 原名字 as 新名字 }
// 2、import { 接受的变量 } from "路径"
// 注意：引入的script 必须添加一个属性  type="module"
//       需要在服务器执行代码   

// ES6 简写
// 默认抛出  export default 值
// 引入      import 变量 from "路径"

// import qwe from "./add.js"
// console.log(qwe)

// common.js规范
// 抛出  module.exports = 值
// 引入  require("路径")

// import num,{a,b,c} from "./add.js";
// console.log(a,b,c,num)

//common
let res = require("./add.js");
console.log(res)
// ES6
import num from "./add.js"
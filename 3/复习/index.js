// 1、const
// 2、解构
//   2-1   let {}  =  {}
//   2-2   let [] = []
// 3、...扩展运算符
// 4、箭头函数   ()=>{}
//    4-1 this 指向定义时  外层环境


// let [a,b,...c] = [1,2,3,4,5,6]
// let {name,age,...obj} = {name:"zhangsna",age:"123",sex:"女"}
// function fun(a,...arr){
// }
// fun(1,2,3,4)

// 交换
// let a = 1,b= 2;
// [b,a] = [a,b]

// 随机数
// let random = (min, max) => {
//     let {
//         floor,
//         random
//     } = Math
//     return floor(random() * (max - min) + min)
// }


// let arr = ["a", "b", "c"]
// Array.prototype.myforEach = function (callback) {
//     for (let i = 0; i < arr.length; i++) {
//         callback(this[i], i)
//     }
// }

// arr.myforEach(function (item, index) {
//     console.log(item, index)
// })

// arr.forEach(item=>console.log(item))

// map
// Array.prototype.myMap = function (callback) {
//     let arr = [];
//     for (let i = 0; i < this.length; i++) {
//         arr.push(callback(this[i], i))
//     }
//     return arr;
// }

// let res = arr.myMap(function (item) {
//     return item
// })
// console.log(res)

// filter
// Array.prototype.myFilter = function (callback) {
//     let arr = [];
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i], i) && arr.push(this[i])
//     }
//     return arr;
// }
// let res = arr.myFilter(function (item) {
//     return true
// })

// console.log(res)

// reduce
// 语法: 传递一个参数   prev 代表第一项  next 代表第二项
//       传递两个参数   prev 代表第二个参数   next代表第一项
let arr = [{
    age: 12
}, {
    age: 24
}, {
    age: 1
}]

Array.prototype.myReduce = function (callback, initValue) {
    let index = 0, //循环下 表
        prev = initValue; //结果
        // 判断初始值 是否传递  并且值不等于0
    if (!initValue && initValue !== 0) {
        prev = this[0];
        index = 1;
    }
    for (; index < this.length; index++) {
        prev = callback(prev, this[index])
    }
    return prev;
}
//  prev  0    next  { age：12 }
//  prev  12   next {  age :24 } 
//  prev  36    next {  age :1 }

let res = arr.myReduce((prev, next) => prev + next.age, 0);

console.log(res)
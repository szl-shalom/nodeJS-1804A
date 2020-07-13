// 1、[...类数组]
// 2、Array.from(类数组)
// 3、Array.prototype.slice.call(类数组)

// let obj = {
//     "0":"a",
//     "1":"b",
//     length:2
// }

// console.log(Array.from(obj))


// find 返回找到的项目  
// 返回回调函数为真所在的项
// findIndex 返回项目所在的下表
// 返回回调函数为真所在的项对应的下表

// let arr = [{
//     name: "张三",
//     age: 18
// }, {
//     name: "李四",
//     age: 22
// }, {
//     name: "王五",
//     age: 26
// }]

// let res = arr.findIndex(item => {
//     return item.name === "王五"
// })

// console.log(res)
// fill(填充值，开始下表，结束下表)
// let arr = []
// arr.length = 100;
// arr.fill(1, 10, 20)
// console.log(arr)

// includes包含返回真  不包含返回假
// let arr = [1, 2, 3, 4]
// console.log(arr.includes(5))


// let arr = 
// let res = arr.flat().flat()
// console.log(res)

// 递归数组降为处理

// function flat(arr) {
//     let result = [];
//     arr.forEach(item=>{
//         if(Array.isArray(item)){
//             result = result.concat(flat(item))
//         }else{
//             result.push(item)
//         }
//     })

//     return result;
// }

// console.log(flat([1, 2, 3, [4, 5, 6, [7, [8, [9,[10]]]]]]))
// 扩展运算符
// ...
// 1.解构数组的时候 ...必须放到最后  没有被解构的值
// let [a, b, ...c] = [1, 2, 3, 4, 5, 6]
// console.log(a, b, c)


// 2、解构对象 ...必须放到最后  没有被解构的值

// let { name,age,...obj } = {name:"张三",age:"17",sex:"男"}
// console.log(name,age,obj)

// let arr = [1, 2, 3, 4, 5, 6, 7, 12, 4, 6, 56, 23342, 0]

// let res = Math.min(...arr)
// console.log(res)

// let obj = {
//     name: "张三",
//     age: "18"
// }

// let res = {
//     sex: "男",
//     ...obj,
// }

// console.log(res)
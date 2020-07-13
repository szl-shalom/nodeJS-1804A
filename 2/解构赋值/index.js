// let obj = {
//     name: "张三",
//     age: "18",
//     sex: "男",
//     like:"打球"
// }

// 对象解构赋值 
// 1、等号左右两端数据保持一致，才能正确解构
// 2、等号左边花括号里面写上你要解构的值
// 3、解构不存在的值 只是undefined
// let { name,age,sex,like } = obj

// console.log(name,age,sex,like)

// 数组解构
// 数组解构 一一对应   
// let arr = ["a", "b", "c", "d"];


// let [p1, , p2, p3, p4 = 1] = arr;
// console.log(p1, p2, p3, p4)

// let [n1, [n2, [n3, [n4]]]] = ["a", ["b", ["c", ["d"]]]]

// console.log(n1, n2, n3, n4)


// 字符串

// let [a, b, c, d] = "1234"
// console.log(a,b,c,d)


// 函数

// function fun({name,age,sex="男"}={}) {
//     console.log(name)
//     console.log(age)
//     console.log(sex)
// }

// fun()
let {name,aa:{age}} = {name:"张三 ",aa:{age:18}}
console.log(name,age)
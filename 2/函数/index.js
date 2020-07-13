// 函数
// 1.默认值
// 必须要在形参声明的时候    形参 = 默认值
// function fun(a = 1) {
//     console.log(a)
// }

// fun(2)

// 2、函数的 length
// 函数的length就是形参的个数
// function fun(a,b){

// }
// console.log(fun.length)

// 3、和 ...(rest运算符)
// function fun(a, b, ...arr) {
//     console.log(arr)
// }

// fun(1, 2, 3, 4, 5)

// 4、函数名字
// function fun() {

// }
// fun.name = "张三"
// console.log(fun.name)

// 5、箭头函数
// 1、箭头this指向 外层环境
// 2、当你有一个形参的时候可以不要括号
// 3、当函数体只有一句代码的时候可以不要花括号
// 4、当条件3成立的时候 这一句代码运行的结果作为函数的返回值
// 5、箭头函数不可以作为构造函数使用
// 6、箭头函数不可以使用arguments实参列表
// 举个栗子


// 普通函数
// 小明10块钱   小红10块   她 小红
// 箭头函数
// 小明10块钱   小红10块   她 小明

// function fun(){

// }

// fun()

// let obj = {
//     name: "张三",
//     age: 18,
//     sayName: function () {
//         console.log(this)
//     }
// }

// obj.sayName()


// 函数柯力化
// let fun = a => b => c => d => a + b + c + d
// console.log(fun(1)(2)(3)(4))


// let add = () => {
//     // console.log([...arguments])
// }

// add(1, 2, 3, 4, 5)

// let a = 1,
//     b = 2;

// [a, b] = [b, a]

// console.log(a, b)

for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i)
    }, 2000)
}
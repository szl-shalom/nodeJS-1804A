const obj = {
    name: "张三"
}
// 冻结(不可以改变)
Object.freeze(obj)

obj.name = "李四";
console.log(obj)
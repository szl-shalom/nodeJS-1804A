// Promise 承若
//  new Promise((resolve,reject)=>{
//      成功 调用resolve   会触发then函数
//      失败 调用reject    会触发catch函数
// })

new Promise((resolve, reject) => {
    // resolve("成功")
    reject("失败")
}).then(result => {
    console.log(result)
}).catch(error => {
    console.log(error)
})
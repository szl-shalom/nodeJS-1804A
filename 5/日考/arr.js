let fun = arr => [...new Set(arr)];

let p1 = arr => arr.sort((a, b) => a - b)

// 抛出模块
module.exports = {
    fun,
    p1
};
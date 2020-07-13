// map
// Array.prototype.myMap = function (cb) {
//     let arr = [];
//     for (let i = 0; i < this.length; i++) {
//         arr.push(cb(this[i], i))
//     }
//     return arr;
// }

// let arr = ["a", "b", "c"];
// let res = arr.myMap(function (item, index) {
//     return item + "1"
// })
// console.log(res)
// 降维处理
// function flat(arr) {
//     let result = [];
//     arr.forEach(item => {
//         if (Array.isArray(item)) {
//             result = result.concat(flat(item))
//         } else {
//             result.push(item)
//         }
//     })
//     return result;
// }

// let result = flat()

// let res = [1, [2, [3, [4]]]]
// console.log(res.flat(Infinity))
// console.log(result)


function makeIterator(array) {
    let index = 0;
    array = array.flat(Infinity)
    return {
        next: function () {
            return index < array.length ? {
                value: array[index++]
            } : {
                done: true
            }
        }
    }
}

let res = makeIterator(["a", ["b", ["e"]], "c", "d"]);
console.log(res.next().value) //a
console.log(res.next().value) //b
console.log(res.next().value) //e
console.log(res.next().value) //c
console.log(res.next().value) //d


// Array.from

let myfrom = (arr, cb) => {
    if (cb) {
        return [].slice.call(arr).map(cb)
    } else {
        return [].slice.call(arr)
    }
}

let obj = {
    0: "a",
    1: "b",
    length: 2
}

console.log(myfrom(obj,function(item){
    return item + 1
}))
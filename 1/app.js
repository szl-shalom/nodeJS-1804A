function fun(arr) {
    return [...new Set(arr)]
}



let res = fun([1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3])
console.log(res)
const ajax = (method, url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest(); //创建对象  （选择目标）
        xhr.open(method, url); //打开链接    （开始行动）
        xhr.send() //发送数据   （送点礼物）
        xhr.onreadystatechange = () => { //监听状态  
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.responseText)
            }
        }
    })
}
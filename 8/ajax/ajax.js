const ajax = (url, type, callback) => {
    // 1、创建对象      (确定目标)
    const xhr = new XMLHttpRequest()
    // 2、打开链接     (展开追求)
    xhr.open(type, url, true)
    // 3、发送数据     (送点礼物)
    xhr.send();
    // 4、监听状态     (给点反映)
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            callback && callback(JSON.parse(xhr.responseText))
        }
    }
}

ajax("data.json", "get", (data) => {
    console.log(data)
})
let tbody = document.querySelector("tbody"),
    page = document.querySelector(".page"),
    pageCode = document.querySelector(".pageCode"),
    pageNum = 20, //每页显示的个数
    pageIndex = 0; //下表


// 请求数据
getData()
// 调用事件
addEvent()


// 封装函数  事件
function addEvent() {
    // 事件委托
    page.addEventListener("click", e => {
        let tar = e.target; //获取事件源
        if (tar.nodeName === "LI") {
            // 说明点击了分页
            // 修改下表   因为事件源的内容和下表差1
            pageIndex = tar.innerHTML - 1;
            getData();
        } else {
            switch (tar.className) {
                case "first":
                    pageIndex = 0;
                    getData()
                    break;
                case "prev":
                    if (pageIndex <= 0) {
                        alert("已经是第一页了！！！");
                        return;
                    }
                    pageIndex--;
                    getData()
                    break;
                case "next":
                    pageIndex++;
                    getData()
                    break;
                case "end":
                    pageIndex = pageCode.children.length - 1
                    getData()
                    break;
                case "go":
                    break;

            }
        }
    })
}


// 请求数据函数
function getData() {
    axios.get("/api/page/getData", {
        params: {
            pageNum,
            pageIndex,
        }
    }).then(result => {
        // 解构数据以及最大页码
        let {
            data,
            maxPageCode
        } = result.data;
        // 渲染内容
        renderContent(data)
        // 渲染分页
        renderPage(maxPageCode);
    })
}


// 封装渲染函数
const renderContent = data => {
    tbody.innerHTML = data.map(item => {
        return `
        <tr>
            <td>${item.code}</td>
            <td>${item.name}</td>
            <td>${item.title}</td>
            <td>${item.datetime}</td>
            <td>
                <b>删除</b>
            </td>
        </tr>
        `
    }).join("")
}
// 渲染页码函数
const renderPage = maxPageCode => {
    let str = "";
    // i 代表页码
    for (let i = 1; i <= maxPageCode; i++) {
        str += `
            <li class="${pageIndex === i - 1 ? "active":""}">${i}</li>
        `
    }
    pageCode.innerHTML = str;
}
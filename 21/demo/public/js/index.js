// 获取必要的节点
let tbody = document.querySelector("tbody"),
    search = document.querySelector(".search"),
    search_btn = document.querySelector(".search_btn"),
    add = document.querySelector(".add"),
    dialog = document.querySelector(".dialog"),
    submit = document.querySelector(".submit"),
    ipts = [...document.querySelectorAll(".content input")],
    flag = true; // 规定 flag真 新增   假 编辑
myID = null;
// 获取数据
getData()
// 模糊搜索
filter()
// 添加事件   删除  编辑 新增
addEvent();

function getData() {
    axios.get("/api/table").then(result => {
        render(result.data)
    })
}


function render(data) {
    tbody.innerHTML = data.map(item => {
        return `
        <tr>
            <td>${item.id}</td>
            <td>${item.first}</td>
            <td>${item.last}</td>
            <td>${item.name}</td>
            <td>
                <button class="del" id=${item.id}>删除</button>
                <button class="modify" id=${item.id}>编辑</button>
            </td>
        </tr>
        `
    }).join("")
}



function filter() {
    search_btn.addEventListener("click", () => {
        axios.post("/api/table/filter", {
            name: search.value,
        }).then(result => {
            render(result.data)
        })
    })
}


function addEvent() {
    // 删除  编辑
    tbody.addEventListener("click", (e) => {
        let tar = e.target;
        if (tar.className === "del") {
            let id = tar.id
            axios.post("/api/table/del", {
                id: id
            }).then(result => {
                getData()
            })
        }

        if (tar.className === "modify") {
            flag = false;
            ipts[0].value = tar.parentNode.parentNode.children[1].innerHTML
            ipts[1].value = tar.parentNode.parentNode.children[2].innerHTML
            ipts[2].value = tar.parentNode.parentNode.children[3].innerHTML
            myID = tar.id;
            dialog.classList.add("active")
        }
    })
    // 新增点击
    add.addEventListener("click", () => {
        dialog.classList.add("active");
        flag = true;
    })
    // 提交点击
    submit.addEventListener("click", () => {
        if (flag) {

            axios.post("/api/table/add", {
                "id": Math.random().toString().slice(2),
                "first": ipts[0].value,
                "last": ipts[1].value,
                "name": ipts[2].value
            }).then(result => {
                getData();
                dialog.classList.remove("active")
            })
        } else {
            axios.post("/api/table/modify", {
                id: myID,
                "first": ipts[0].value,
                "last": ipts[1].value,
                "name": ipts[2].value
            }).then(result => {
                getData();
                dialog.classList.remove("active")
            })
        }

    })
}

// let arr = [{
//     name: "张三"a
// }, {
//     name: "私立"
// }, {
//     name: "小张"
// }]


// console.log(
//     arr.filter(item => {
//         return item.name.includes("张")
//     })
// )
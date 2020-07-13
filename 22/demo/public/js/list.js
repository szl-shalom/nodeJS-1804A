let tbody = document.querySelector("tbody"),
    search = document.querySelector(".search"),
    add = document.querySelector(".add"),
    dialog = document.querySelector(".dialog"),
    submit = document.querySelector(".submit"),
    ipts = [...document.querySelectorAll(".content input")],
    id = 1;

const getData = () => {
    axios.get("/api/list/getData").then(result => {
        render(result.data)
    })
}

const render = (data) => {
    tbody.innerHTML = data.map(item => {
        return `
        <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.datetime}</td>
            <td>${item.title}</td>
            <td>
                <b class="del" id=${item.id}>删除</b>
            </td>
        </tr>
        `
    }).join("");
}


const addEvent = () => {
    tbody.addEventListener("click", e => {
        let tar = e.target;
        if (tar.className === "del") {
            axios.post("/api/list/del", {
                id: tar.id,
            }).then(result => {
                getData();
            })
        }
    })

    search.addEventListener("input", () => {
        axios.post("/api/list/filter", {
            val: search.value,
        }).then(result => {
            render(result.data)
        })
    })


    add.addEventListener("click", () => {
        dialog.style.display = "block"
    })


    submit.addEventListener("click", () => {
        axios.post("/api/list/add", {
            "title": ipts[1].value,
            "name": ipts[0].value,
            "id": ++id,
            "datetime": ipts[2].value
        }).then(result => {
            getData();
            dialog.style.display = "none";
        })
    })
}

getData();
addEvent();
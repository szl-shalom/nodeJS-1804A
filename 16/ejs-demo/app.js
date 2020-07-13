const express = require("express");
const app = express();
const path = require("path");
const index = require("./server/index");
app.use(express.json())
app.use(express.urlencoded())
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs")


// app.get("/", ((req, res) => {
//     res.render("index", {
//         title: 123
//     })
// }))
app.put("/api/list", (req, res) => {
    console.log(req.query, req.body)
    console.log("delete")
    res.send("123")
})


app.use("/api/login", index)
app.use(express.static("public"))
app.listen(8080, () => console.log("server in running in port 8080"));
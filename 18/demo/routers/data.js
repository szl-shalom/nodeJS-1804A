const express = require("express");
const route = express.Router();
const fs = require("fs");
const { default: Axios } = require("axios");
module.exports = route;




// 获取数据接口
//   path  =>  /api/data
route.get("/", (req, res) => {
    res.send(fs.readFileSync("mock/user.json", "utf-8"))
})


// 删除接口
// path => /api/data/del
// 方式 delete
route.delete("/del", (req,res) => {
    // 虎丘要删除的id
    let { id } = req.body;
    // 读取本地数据
    let data = JSON.parse(fs.readFileSync("mock/user.json","utf-8"));
    // 删除id 
    data = data.filter(item=>item.id !==id);
    // 重新保存本地数据
    fs.writeFileSync("mock/user.json",JSON.stringify(data));
    // 返回
    res.send({
        code:1,
        mess:"OK"
    })
})

/**
 *  1、get => 
 *  axios.get("接口",{
 *      params:{
 *           发送的数据
 *      }
 * })
 *  
 * 通过 req.query接受
 *  2、post =>
 * 
 *  axios.post("接口",{
 *      发送数据
 *  })
 * 
 *  通过req.body接受
 *  
 * 3、delete
 * axios.delete("接口"，{
 *      data:{
 *          发送的数据
 *      }
 * })
 * 
 *  req.body接受
 * 
 * 
 * 
 *
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */












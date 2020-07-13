# express 是基于node的web框架，可以快速开发你的程序

## 使用  先下载   npm i express -S
## 具体使用
```javascript
    const express = require("express");
   
    const app = express();
    // 监听
    app.get("路径|接口",(re,res)=>{


        // 返回
        res.send(数据)
    })
    // 起服务
    app.listen("端口号",服务启动之后的回调函数)
```


# mock
- 初始化包 npm init --y
- 安装 cnpm i mockjs -D
- 使用
```javascript
    const Mock = require("mockjs");
    // 随机生成数据
    Mock.mock({
    // 随机生成2-3对象
    "list|2-3": [{
        "name": "@cname", //中文名称
        "flag": "@boolean", //布尔值
        "color": "@color", //颜色
        "word": "@cword(20)", // 20个汉字
        "title": "@ctitle", //标题
        "count|100-1000": 1, //生成数字 100-1000 键值是一个数字
        "url": "@image" //随机图片
    }]
})

```
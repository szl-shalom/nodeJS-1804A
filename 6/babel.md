# 安装  npm i @babel/core @babel/cli @babel/preset-env -D
- 新建一个.babelrc文件,里面写上配置
```javascript
    {
        presets:["@babel/preset-env"]
    }
```
- 终端  npx babel 打包的文件 -o 输出的文件 
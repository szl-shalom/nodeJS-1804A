# npm  是nodeJS的包管理工具   全称：node package mange
- npm config list || npm config ls  查看当前 npm 配置信息
- -  prefix  全局安装包的路径
- -  cache   全局缓存路径
- -  registry 镜像源
---
命令|含义
---|---
npm config set prefix 路径 | 设置全局安装包的路径
npm config get prefix | 获取全局安装包的路径
npm config set cache 路径 | 设置缓存路径
npm config get cache | 获取缓存路径
npm config set registry | 设置镜像源
npm root -g | 全局安装包的地址
# 使用npm 
- 第一步 初始化包管理工具  npm init   || npm init --y  快速创建
- 第二步 会出现一个文件 package.json 包的描述信息文件
---
字段|含义
---|---
name |  包的名字
version |  版本号
description | 包的描述信息
main | 入口文件
scripts | 脚本命令
author | 作者
license | 许可
- 第三步 下载第三方的包
- - npm install 包名 -g  全局安装
- - npm install 包名 --save--dev (-D)  本地安装(开发环境) 同时在package.json文件上devDependencies添加依赖
- - npm install 包名 --save (-S) 本地安装(线上环境)  同时在package.json文件上dependencies添加依赖
- npm install 安装依赖  根据package.json文件的devDeoendencies和dependcies字段安装依赖
- 第四步 引入 require("包名")

# node 提供核心模块
- fs 文件系统
- path 路径系统
- http 服务系统
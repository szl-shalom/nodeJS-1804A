# gulp是一个自动化构建工具
- gulp是第三方的一个包
- 1、安装
- - 全局脚手架工具 npm i gulp-cli -g (只需要一次)
- - 本地安装gulp  npm i gulp -D (每新建一个包需要安装一次)
- - gulp -v 检查版本号   能看到版本号说明安装成功
- 2、需要跟根目录新建一个文件 gulpfile.js gulp的入口文件
- 3、gulp方法
```javascript
    // 新建一个任务
    gulp.task("任务名称",回调函数)
    // 读取文件
    gulp.src("目录名称|文件名称")
    // 流式写入  + 写入路径
    gulp.pipe(gulp.desk("目录"))
    // 异步执行所有任务
    gulp.parallel(["任务一","任务二"])
   
```
- 4、直接在终端执行 gulp 任务名称   （如果你不写任务名称，默认执行default任务）


- 5、插件系统

插件名称|干啥用
---|---
gulp-sass | 编译sass/scss文件
gulp-htmlmin | 压缩html
gulp-babel | ES6 => ES5/ES3
gulp-clean-css | 压缩css
gulp-uglify | 压缩js
gulp-imagemin | 压缩图片
gulp-cancat | 拼接文件

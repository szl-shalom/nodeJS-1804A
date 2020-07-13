const gulp = require("gulp");
const gulpSass = require("gulp-sass")
const gulpBabel = require("gulp-babel");
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
// 起任务
// 处理html
gulp.task("html", function () {
    // 读取文件
    return gulp.src("public/index.html")
        //  写入流式文件 + 目录
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest("dist/"))
})

// 处理  scss 文件
gulp.task("scss", function () {
    return gulp.src("public/scss/*.scss") //读取
        .pipe(gulpSass()) //编译scss
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest("dist/css/")) //输出
})

// 处理 js
gulp.task("js", function () {
    return gulp.src("public/js/index.js")
        .pipe(gulpBabel({
            "presets": ["@babel/preset-env"]
        }))
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"))
})

// 自动化部署
gulp.task("auto", function () {
    gulp.watch("public", gulp.parallel(["html", "js", "scss"]))
})

var gulp = require('gulp');
var del = require('del');
var path=require('path');
/***********js************/
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
/***********js************/
/***********css************/
var minifycss = require('gulp-minify-css');
var csslint = require('gulp-csslint');
/***********css************/
/***********html************/
var htmlmin = require('gulp-htmlmin');
//http://www.cnblogs.com/lurenjiashuo/p/gulp-demo.html
var processhtml = require('gulp-processhtml');//html标记合并
var processhtmlopts = { /* plugin options */ };
/***********html************/
/***********json************/
var jsonlint = require('gulp-jsonlint');
var jsonmin = require('gulp-jsonminify');
/***********json************/
var rename = require('gulp-rename');       //重命名
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var paths = {
    scripts: ['src/app/js/**/*.coffee',
        '!src/external/**/*.coffee',
        'src/**/*.js',
        'src/app/**/*.js'],
    images: 'src/app/img/**/*',
    css:['src/**/*.css'],
    html:['./src/**/*.html'],
    json:['./src/**/**/*.json'],
    dist:'dist'
};
var distPaths={
    img:'dist/img',
    fonts:'dist/font',
    js:'dist/js',
    css:'dist/css',
    json:'dist/json'
}

//gulp.task('default', function() {
//    // place code for your default task here
//});
gulp.task('clean', function(cb) {
    // You can use multiple globbing patterns as you would with `gulp.src`
    del(paths.dist, cb);
});
/*****************lint***************/
gulp.task('lint',['lintcss','lintjson','lintjs']);
gulp.task('lintjs', function() {
    return gulp.src(paths.scripts)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
gulp.task('lintcss', function() {
    return gulp.src(paths.css)
        .pipe(csslint())
        .pipe(csslint.reporter());
    //.pipe(csslint())
    //.pipe(csslint.reporter())
    //.pipe(csslint.failReporter());
});
var myCustomReporter = function (file) {
    console.log('File ' + file.path + ' is not valid JSON.');
};
gulp.task('lintjson', function() {
    return gulp.src(paths.json)
        .pipe(jsonlint())
        .pipe(jsonlint.reporter(myCustomReporter));
});
/*****************lint***************/
/*****************min***************/
gulp.task('min',['minimg','minjson','mincss','minhtml','minjs']);
gulp.task('minimg', ['clean'], function() {
    return gulp.src(paths.images)
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest(distPaths.img));
});
gulp.task('minjs', function() {
    return gulp.src(paths.scripts)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(gulp.dest(distPaths.js));
});
gulp.task('mincss', function() {
    return gulp.src(paths.css)      //压缩的文件
        //.pipe(gulp.dest('build'))   //输出文件夹
        .pipe(minifycss())
        .pipe(gulp.dest(distPaths.css));   //执行压缩
});
gulp.task('minjson', function () {
    return gulp.src(paths.json)
        .pipe(jsonmin())
        .pipe(gulp.dest(distPaths.json));
});
gulp.task('minhtml', function() {
    return gulp.src('src/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'))
});
/*****************min***************/
var opts = { /* plugin options */ };
gulp.task('processhtml', function() {
    return gulp.src(paths.html)
        .pipe(processhtml(opts))
        .pipe(gulp.dest(paths.dist));
});


gulp.task('scripts', ['lintjs','clean'], function() {
    // Minify and copy all JavaScript (except vendor scripts)
    // with sourcemaps all the way down
    return gulp.src(paths.scripts)
        .pipe(sourcemaps.init())
        //    .pipe(coffee())
        .pipe(uglify())
        // .pipe(concat('all.min.js'))
        //  .pipe(sourcemaps.write())
        .pipe(gulp.dest(distPaths.js));
});
//gulp.task('images', ['clean'], function() {
//    return gulp.src(paths.images)
//        .pipe(imagemin({optimizationLevel: 5}))
//        .pipe(gulp.dest('build/img'));
//});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.images, ['minimages']);
});
var taskDefault=['processhtml'];
// The default task (called when you run `gulp` from cli)
gulp.task('default', taskDefault);
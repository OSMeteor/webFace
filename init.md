____
###dir:

* dist 项目发布文件夹
* doc  项目文档
* src 项目源码
*  test 测试代码
*  gulp  项目构建代码 

### file
* gulpfiile.js  项目构建代码，通过gulp/gulpfile.js
      require('./gulp/gulpfile');
* package.json 项目构建依赖的node_modules

> /gulp
> 
> gulpfiile.js 项目构建核心代码
>
>init.js 生成外部项目文件夹格式
>
"src/assets/font",
    "src/assets/img",
    "src/assets/css",
    "src/assets/vendor",
    "src/assets/cursor",
    "src/assets/icon",
    "src/script",
    "src/bower_components",
    "src/less",
    "src/style/phone",
    "src/views/template",
    "dist",
    "doc",
    "test"
    
___

> ##测试框架
>sinon.js    ||    Karma  ||   Jasmine
>
____

布局：
html>head>meta+link:css+link:favicon>body>(header+(.navbar>nav)+.container+footer)+script:src
header+nav+(section>(header+article))+aside+footer

header.header+(nav.nav>(div))+(section.section>(header+article))+aside.aside+footer.footer
d3  图标数据
html5shiv



git use
git init
git add --a [git add .]
git commit -m "first commit"
git remote add origin xx.git
git push -u  master
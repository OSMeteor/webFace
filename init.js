var fileArray=[
    "src/assets/font",
    "src/assets/img",
    "src/assets/css",
    "src/assets/vendor",
    "src/assets/cursor",
    "src/assets/icon",
    "src/assets/lib/ng",
    "src/script",
    "src/bower_components",
    "src/less",
    "src/dev",
    "src/dev/lib",
    "src/dev/css",
    "src/dev/js",
    "src/style/phone",
    "src/views/template",
    "dist",
    "doc",
    "test"
    //,"gulp/node_modules"
];
var glupArray=[
  "gulp","del","gulp-concat","gulp-uglify","gulp-jshint","gulp-minify","amd-optimize",
    "gulp-imagemin","gulp-copy"
];
var path=require('path'), fs=require('fs');
var exec = require('child_process').exec;

var approotPath=path.join(__dirname,'..');
console.log("approotPath: "+approotPath);
//递归创建目录 同步方法
function mkdirsSync(dirname, mode){
    if(fs.existsSync(dirname)){
        return true;
    }else{
        if(mkdirsSync(path.dirname(dirname), mode)){
            fs.mkdirSync(dirname, mode);
            return true;
        }
    }
}
function initDir(){
    for(var item in fileArray){
        console.info(path.join(approotPath,fileArray[item]));
        mkdirsSync(path.join(__dirname,fileArray[item]),null,function(){});
    }
}
var npmcmd="npm -v";


initDir();
//exec(npmcmd, function(error, stdout, stderr) {
//  if(error)   console.warn('not install npm')
//  else {
//      console.log('npm version: ' + stdout);
//      exec("cd " + path.join(__dirname,'gulp'), function (error, stdout, stderr) {
//          if (!error)
//              glupArray.forEach(function (item) {
//                  var npmcmdItem = "sudo npm install "+item+" --save";
//                  exec(npmcmdItem, function(error, stdout, stderr) {
//                      if(!error){
//                          console.log(npmcmdItem);
//                      }else{
//                          console.warn(stdout,stderr);
//                      }
//                  });
//              });
//          else console.warn(stdout,stderr);
//      });
//  }
//});



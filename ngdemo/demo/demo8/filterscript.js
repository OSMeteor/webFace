//过滤器对象工厂定义
var ezUCFilterFactory = function(){
    //过滤器对象返回的是一个过滤函数
    return function(input,cap){
        if(!cap) return input.toUpperCase();
        var output = input.replace(/\b\w+\b/g, function(word) {
            return word.substring(0,1).toUpperCase( ) +word.substring(1);
        });
        return output;
    }
};
angular.module("ezstuff",[])
//使用模块的filter()接口注册过滤器
    .filter("ezUC",ezUCFilterFactory);

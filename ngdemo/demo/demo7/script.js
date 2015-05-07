//定义指令的类工厂
var ezHoverableFactory = function(){
    return {
        restrict : "A",
        link : function(scope,element,attrs){
            element.on("mouseover",function(){
                element.css({outline:"#ff0000 dotted thick"});
            })
                .on("mouseout",function(){
                    element.css({outline:"none"});
                })
        }
    };
};
angular.module("ezstuff",[])
    .directive("ezHoverable",ezHoverableFactory);

angular.module("app", []).controller("parentCtr",
    function ($scope) {
        // 1  监听调用
        $scope.$on("Ctr1NameChange",
            function (event, msg) {
                console.log("parent", msg);
                $scope.parentCtrname=msg;//设置给父控制器
                $scope.$broadcast("Ctr1NameChangeFromParrent", msg); // 4 广播给子控制器
            });
    }).controller("childCtr1", function ($scope) {
        $scope.$on("Ctr1NameChangeFromParrent", // 5 监听子父控制器的
            function (event, msg) {
                console.log("childCtr2", msg);
                $scope.name = msg; // 6 .   显示在页面上
            });
    }).controller("childCtr2", function ($scope) {
        $scope.change = function (name) { // 2 模型上绑定change事件
            console.log("childCtr1", name);
            $scope.$emit("Ctr1NameChange", name);//3 发送给父控制器
        };

    });
angular.module("app", []).controller("parendCtrl",
    function ($scope) {

    }).controller("child1Ctrl", function ($scope,$rootScope) {
        $scope.location = "child1Ctrl";
        $rootScope.$watch('rootLocation', function(newUsername) {

            $scope.location=$rootScope.rootLocation;
        });
        var msg="this is recall msg";
        $scope.recall = function(location) {
            //$rootScope.rootLocation = location;
            $rootScope.rootLocation = msg;
        }
    }).controller("child2Ctrl", function ($scope,$rootScope) {
        //$rootScope.rootLocation = "child2Ctrl";
        $scope.change = function (name) {
            $rootScope.rootLocation = name;
        };
    });
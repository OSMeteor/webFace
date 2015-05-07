
var app=angular.module("app", []);
app.factory('instance',function(){
    return {};
});
app.controller('MainCtrl', function($scope, instance) {
    $scope.change = function() {
        instance.name = $scope.test;
    };
});
app.controller('sideCtrl', function($scope, instance) {

    $scope.add = function() {
        $scope.name = instance.name;
    };
});
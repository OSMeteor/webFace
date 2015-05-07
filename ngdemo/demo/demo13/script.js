var ezControllerClass = function($scope){
    $scope.true=true;
    $scope.color = {
        name: true
    };
    $scope.specialValue = {
        "id": "12345",
        "value": "green"
    };
    //$scope.color = {
    //    name: 'blue'
    //};
    //$scope.specialValue = {
    //    "id": "12345",
    //    "value": "green"
    //};
};
angular.module("ezstuff",[])
    .controller("ExampleController",ezControllerClass);
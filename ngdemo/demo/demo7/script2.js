angular.module("ezstuff",[])
    .controller("ezCtrl", ["$scope", function($scope) {
        $scope.customer = {
            name: "Naomi",
            address: "1600 Amphitheatre"
        };
    }])
    .directive("ezCustomer", function() {
        return {
            restrict:"E",
            replace:true,
            template: "<div>Name: {{customer.name}} Address: {{customer.address}}</div>"
        };
    });

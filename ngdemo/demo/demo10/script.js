var shoppingCartModule = angular.module("shoppingCart", [])
shoppingCartModule.controller("ShoppingCartController",
    function ($scope) {
        // demo 1
        $scope.menuState = {'show':true};
        $scope.test2 = function () {
            $scope.menuState.show = !$scope.menuState.show;
        };

        // demo 2
        $scope.isDisabled = true;
        $scope.test = function () {
            $scope.isDisabled = 'false';
        };
        $scope.test1 = function () {
            $scope.isDisabled = 'true';
        };
        $scope.test11 = function () {
            $scope.isDisabled = !$scope.isDisabled;
        };

        // demo 3
        $scope.isError = false;
        $scope.isWarning = false;
        $scope.messageText = 'default, default';
        $scope.showError = function () {
            $scope.messageText = 'This is an error';
            $scope.isError = " background-color: red;";
            //$scope.isWarning = false;
            //
            //$scope.isError = true;
            $scope.isWarning = false;
        };
        $scope.showWarning = function () {
            $scope.messageText = 'Just a warning, donot warry';
            $scope.isWarning = true;
            $scope.isError = false;
        };

        // demo 4
        $scope.items = [
            { product_name: "Product 1", price: 50 },
            { product_name: "Product 2", price: 20 },
            { product_name: "Product 3", price: 180 }
        ];
        $scope.selectedWhich = function (row) {
            $scope.selectedRow = row;
        };
        $scope.color = {
            name: 'blue'
        };
        $scope.specialValue = {
            "id": "12345",
            "value": "green"
        };
    });
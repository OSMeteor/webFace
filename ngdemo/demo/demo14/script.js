
angular.module("ezstuff",['ngDialog']);

app.controller('MainCtrl', function ($scope, ngDialog) {
    $scope.clickToOpen = function () {
        ngDialog.open({
            template: '<p>my template</p>',
            plain: true
        });
    };
});
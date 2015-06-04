var app = angular.module('jsCodingTest', ['cpLib', 'ngMap']);
app.factory('BurritoFactory', function (PackagesFactory) {
    return {
        getBurritos: function () { return PackagesFactory.searchPackages('Burrito', 'SW1A%200AA'); }
    };
});
app.controller('GiveTheGovernmentABurrito', function (BurritoFactory, $scope) {
    $scope.vendorCenter = function (vendor) {
        return vendor.addresses[0].latitude + ', ' + vendor.addresses[0].longitude;
    };
    $scope.addressPosition = function (address) {
        return '[' + address.latitude + ', ' + address.longitude + ']';
    };
    $scope.loading = true;
    $scope.greeting = 'Hello, world!';
    $scope.packages = [];

    BurritoFactory.getBurritos().success(function (data) {
        $scope.loading = false;
        $scope.packages = data.packages;
    });
});

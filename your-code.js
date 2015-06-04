angular.module('jsCodingTest', ['cpLib']);

angular.module('jsCodingTest').controller('GiveTheGovernmentABurrito', function(PackagesFactory, $scope) {
    // Your JavaScript goes here.
    // Your code should use our JS library's `PackagesFactory.searchPackages` method to search
    // for burritos that can be delivered to the Houses of Parliament in London.
    // The API URL that should be called is:
    // https://api.citypantry.com/packages/search?name=Burrito&postcode=SW1A%200AA
    $scope.loading = true;
    $scope.packages = [];
    PackagesFactory.searchPackages('Burrito', 'SW1A%200AA').success(function(data) {
        $scope.loading = false;
        $scope.packages = data.packages;
        var p;
        for (var i in data.packages) {
            p = data.packages[i];
            console.log(p.vendor.facebookUrl);
        }
    });
});

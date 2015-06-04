describe('GiveTheGovernmentABurrito example', function () {
    beforeEach(module('jsCodingTest'));

    var GiveTheGovernmentABurritoController, scope;
    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        GiveTheGovernmentABurritoController = $controller('GiveTheGovernmentABurrito', { $scope: scope });
    }));

    it('says hello world', function () {
        expect(scope.greeting).toEqual("Hello, world!");
    });
});
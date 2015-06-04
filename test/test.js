describe('GiveTheGovernmentABurrito', function () {
    beforeEach(module('jsCodingTest'));

    var $controller;
    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('controller', function () {
        it('should exist', function () {
            var scope = {};
            var controller = $controller('GiveTheGovernmentABurrito', { $scope: scope });
            expect(controller).toBeDefined();
        });
    });
});
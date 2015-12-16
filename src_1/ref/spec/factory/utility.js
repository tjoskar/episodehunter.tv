describe('Utility functions: ', function() {

    describe('MD5: ', function() {
        var md5;

        beforeEach(function() {
            module('EHW.utilities');

            inject(function($injector) {
                md5 = $injector.get('md5');
            });
        });

        it('should calculate a correct md5 hash for a given string', function() {
            var hash = md5.createHash('Carl XVI Gustaf');
            expect(hash).toBe('0d12aa6f029913790167b1474f41f0f1');
        });

    });

});

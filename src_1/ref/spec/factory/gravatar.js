describe('Given gravatar: ', function() {
    var gravatar;

    beforeEach(function() {
        module('EHW.gravatar');

        inject(function($injector) {
            gravatar = $injector.get('gravatarService');
        });
    });

    it('should create a gravatar url', function() {
        var url = gravatar.getImageSrc('kungen@hovet.se');
        expect(url).toBe('http://www.gravatar.com/avatar/fa7b418e434fc5467ab6bedb4a4d5287?d=404');
    });

    it('should handle upper/lower case', function() {
        var url = gravatar.getImageSrc('kUnGen@HOVET.se');
        expect(url).toBe('http://www.gravatar.com/avatar/fa7b418e434fc5467ab6bedb4a4d5287?d=404');
    });

    it('should be able to create a secure url', function() {
        var url = gravatar.getImageSrc('kUnGen@HOVET.se', true);
        expect(url).toBe('https://secure.gravatar.com/avatar/fa7b418e434fc5467ab6bedb4a4d5287?d=404');
    });

});

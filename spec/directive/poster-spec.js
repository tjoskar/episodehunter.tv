describe("Poster directive: ", function() {
    var default_image;
    var image;

    beforeEach(module("EHW"));

    beforeEach(inject(function($compile, $rootScope, $httpBackend) {
        $httpBackend.when('GET', '/api/v2/user').respond({
            'status': 200,
            'message': 'OK',
            'value': {
                'username': 'john_doe',
                'timezone': 'Europe/Stockholm'
            }
        });

        $rootScope.image_url = 'image.jpg';
        $rootScope.$apply();
        default_image = angular.element('<img eh-poster url="" />');
        $compile(default_image)($rootScope);

        image = angular.element('<img eh-poster url="image_url" />');
        $compile(image)($rootScope);
    }));


    it("should return default image if url is not set", function() {
        expect(default_image.attr('src')).toEqual('http://img.episodehunter.tv/serie/poster/1363113862.png');
        expect(default_image.attr('data-original')).toBeUndefined();
    });

    it("should return a given image if url is set", function() {
        expect(image.attr('src')).toEqual('http://img.episodehunter.tv/serie/poster/1363113862.png');
        expect(image.attr('data-original')).toEqual('image.jpg');
    });
});

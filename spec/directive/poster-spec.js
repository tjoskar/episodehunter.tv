describe("poster directive tests that", function() {
    var default_image;
    var image;

    beforeEach(module("EHW"));

    beforeEach(inject(function($compile, $rootScope) {
        $rootScope.image_url = 'image.jpg';
        $rootScope.$apply();
        default_image = angular.element('<img poster url="" />');
        $compile(default_image)($rootScope);

        image = angular.element('<img poster url="image_url" />');
        $compile(image)($rootScope);
    }));


    describe("empty url", function() {
        it("should return default img", function() {
            expect(default_image.attr('src')).toEqual('http://img.episodehunter.tv/serie/poster/1363113862.png');
            expect(default_image.attr('data-original')).toBeUndefined();
        });

        it("should return image.jpg", function() {
            expect(image.attr('src')).toEqual('http://img.episodehunter.tv/serie/poster/1363113862.png');
            expect(image.attr('data-original')).toEqual('image.jpg');
        });
    });
});

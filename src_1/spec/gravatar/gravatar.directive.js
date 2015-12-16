'use strict';

describe('Gravatar directive', function() {
    var element;


    beforeEach(function() {
        module('EH.directive.gravatar');
        inject(function ($rootScope, $compile) {
            element = angular.element('<gravatar-image data-gravatar-email="email" data-gravatar-css-class="round-image" ></gravatar-image>');

            $rootScope.email = 'kungen@hovet.se';
            $rootScope.$apply();

            $compile(element)($rootScope);
            $rootScope.$digest();
        });
    });

    it('should add image tag to the element', function () {
        var image = element.html();

        expect(image).toContain('<img');
    });

    it('should add md5 of the email address to the image tag', function () {
        var image = element.html();

        expect(image).toContain('fa7b418e434fc5467ab6bedb4a4d5287');
    });

    it('should add a parse the data-class attribute and assign it to the class attribute', function () {
        var cssClass = element.html();

        expect(cssClass).toContain('class="round-image"');
    });
});

angular.module("EHW").directive('ehPoster', function() {
    return {
        scope: {
            url: '='
        },
        link: function(scope, element) {
            element.attr('src', EH.url.shows.poster + EH.url.defaultImage.poster);
            element.attr('alt', '');
            element.attr('width', '160');

            element.lazyload = element.lazyload || function() {};

            if (scope.url) {
                if (element.is(":in-viewport")) {
                    element.attr('src', scope.url);
                } else {
                    element.attr('data-original', scope.url);
                    element.lazyload({
                        effect: "fadeIn",
                        threshold: 50
                    });
                }
            }
        }
    };
});

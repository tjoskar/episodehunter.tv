angular.module("EHW").directive('poster', function() {
    return {
        scope: {
            url: '='
        },
        link: function(scope, element, attrs) {
            element.attr('src', EH.url.shows.poster + EH.url.defaultImage.poster);
            element.attr('alt', '');
            element.attr('width', '160');

            element.lazyload = element.lazyload || function() {};

            if (scope.url) {
                element.attr('data-original', scope.url);
                element.lazyload({
                    effect: "fadeIn",
                    threshold: 50
                });
            }
        }
    };
});

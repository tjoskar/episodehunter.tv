angular.module("EHW").directive('ehHistoryThumbnail', function() {
    return {

        scope: {
            url: '='
        },

        link: function(scope, element) {
            element.attr('src', EH.url.shows.episode + EH.url.defaultImage.episode);
            element.attr('class', 'episode-list-no-img');
            element.attr('alt', '');

            element.lazyload = element.lazyload || function() {};

            if (scope.url) {
                element.attr('class', '');

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

            var image_frame = element.parent().parent();
            image_frame.hover(
                function() {
                    image_frame.find('.remove').show();
                }, function() {
                    image_frame.find('.remove').hide();
                }
            );

        }

    };
});

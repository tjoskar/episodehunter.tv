/**
 * Show TV series name on poster hover
 */
angular.module('EHW').directive('ehShowSeriesNameOnPosterHover', function() {
    return {
        link : function(scope, element) {

            var poster = element.parent().parent();
            var show_name = element.parent().children('.show-name');

            poster.bind('mouseenter', function() {
                show_name.css('bottom', '49px');
                element.show();
            });

            poster.bind('mouseleave', function() {
                show_name.css('bottom', '0px');
                element.hide();
            });

        }
    };
});

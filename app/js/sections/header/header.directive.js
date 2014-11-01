/**
* @desc Header directive that fade background while scrolling
* @example <div eh-header></div>
*/
(function register(angular) {
    'use strict';

    angular
        .module('EHW')
        .directive('ehHeader', header);

    function header() {
        var directive = {
            link: linkFunc
        };

        function linkFunc(_, el) {
            var $window = $(window);
            var links = el.find('nav > ul > li > a');
            var headerBackground = el.css('background-color');
            var lastComma = headerBackground.lastIndexOf(',');

            $(window).scroll(function() {
                var scrollTop = $window.scrollTop();

                if (scrollTop > 500) {
                    return;
                }

                var alpha = Math.max(Math.min(scrollTop / 500, 0.95), 0);
                var linkColor = Math.max(Math.min(Math.round(255 - scrollTop * 0.408), 255), 51);
                var newheaderBackground = headerBackground.slice(0, lastComma + 1) + alpha + ')';

                el.css('background-color', newheaderBackground);
                links.each(function(_, link) {
                    $(link).css('color', 'rgb(' + [linkColor, linkColor, linkColor].join() + ')');
                });

            });
        }

        return directive;
    }

})(angular);

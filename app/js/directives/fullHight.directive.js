/**
* @desc Gives an element the window hight
* @example <div full-hight></div>
*/
(function register(angular) {
    'use strict';

    angular
        .module('EHW')
        .directive('fullHight', fullHight);

    function fullHight() {
        var directive = {
            link: linkFunc
        };

        function linkFunc(_, el) {
            el.css('height', $(window).height());
        }

        return directive;
    }

})(angular);

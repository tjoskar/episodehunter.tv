(function(angular) {
    'use strict';

    angular
        .module('EHW.gravatar')
        .directive('gravatarImage', ['gravatarService', GravatarDirective]);

    function GravatarDirective(gravatarService) {
        var directive = {
            link: link
        };

        function link(scope, element, attrs) {
            scope.$watch(attrs.gravatarEmail, function (email) {

                if (email && email.match(/.*@.*\..{2}/) !== null) {
                    var cssClass = attrs.gravatarCssClass || '';
                    var src = gravatarService.getImageSrc(email, attrs.gravatarSecure);
                    var tag = '<img class="' + cssClass + '" src="' + src + '" >';

                    element.find('img').remove();
                    element.append(tag);

                    element.find('img').bind('error', function() {
                        element.find('img').remove();
                    });
                }

            });
        }

        return directive;

    }

})(angular);

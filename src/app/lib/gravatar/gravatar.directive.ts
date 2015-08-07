'use strict';

interface F { (): any; $inject: string[]; }

var GravatarDirective = <F>function GravatarDirective(GravatarFactory) {
    var directive = {
        link: link,
        scope: {
            gravatarEmail: '='
        }
    };

    function link(scope, element, attrs) {
        scope.$watch('gravatarEmail', email => {

            if (email && email.match(/.*@.*\..{2}/) !== null) {
                var cssClass = attrs.gravatarCssClass || '';
                var src = GravatarFactory.getImageSrc(email, attrs.gravatarSecure);
                var tag = `<img class="${cssClass}" src="${src}">`;

                element.find('img').remove();
                element.append(tag);

                element.find('img').bind('error', function() {
                    element.find('img').remove();
                });
            } else if (email === '') {
                element.find('img').remove();
            }

        });
    }

    return directive;

}

GravatarDirective.$inject = ['gravatarFactory'];

export {GravatarDirective};
export default GravatarDirective;

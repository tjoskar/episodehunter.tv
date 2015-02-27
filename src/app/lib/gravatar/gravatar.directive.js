function GravatarDirective(GravatarFactory) {
    var directive = {
        link: link,
        scope: {
            gravatarEmail: '='
        }
    };

    function link(scope, element, attrs) {
        scope.$watch('gravatarEmail', function (email) {
            console.log(email);

            if (email && email.match(/.*@.*\..{2}/) !== null) {
                var cssClass = attrs.gravatarCssClass || '';
                var src = GravatarFactory.getImageSrc(email, attrs.gravatarSecure);
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

export default GravatarDirective;

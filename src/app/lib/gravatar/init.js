'use strict';

import GravatarDirective from './gravatar.directive';
import GravatarFactory from './gravatar.factory';

var bind = () => {
    var directiveName = 'EH.directive.gravatar';

    angular
        .module(directiveName, [])
        .factory('gravatarFactory', GravatarFactory)
        .directive('gravatarImage', GravatarDirective);

    return directiveName;
};

export default {bind};

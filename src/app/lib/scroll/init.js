'use strict';

import ScrollFactory from './scrollToElement.factory';

var bind = () => {
    var directiveName = 'EH.factory.scroll';

    angular
        .module(directiveName, [])
        .factory('scrollToElement', ScrollFactory);

    return directiveName;
};

export default {bind};

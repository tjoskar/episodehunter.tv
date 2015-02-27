'use strict';

import AuthenticationCtrl from './authentication.controller';

var bind = () => {
    var moduleName = 'EH.authentication';

    angular
        .module(moduleName, [])
        .controller('AuthenticationCtrl', AuthenticationCtrl);

    return moduleName;
};

export default {bind};

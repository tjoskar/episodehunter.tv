'use strict';

import AuthenticationRepository from './authentication.repository';
import AuthenticationCtrl from './authentication.controller';

var bind = () => {
    var moduleName = 'EH.authentication';

    angular
        .module(moduleName, [])
        .service('AuthenticationRepository', AuthenticationRepository)
        .controller('AuthenticationCtrl', AuthenticationCtrl);

    return moduleName;
};

export default {bind};

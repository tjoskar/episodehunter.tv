'use strict';

import AuthenticationRepository from './authentication.repository';
import AuthenticationCtrl from './authentication.controller';
import AuthenticationService from './authentication.service';
import RegisterFormDirective from './register.form.directive';

var bind = () => {
    var moduleName = 'EH.authentication';

    angular
        .module(moduleName, [])
        .directive('registerForm', RegisterFormDirective)
        .service('AuthenticationRepository', AuthenticationRepository)
        .service('AuthenticationService', AuthenticationService)
        .controller('AuthenticationCtrl', AuthenticationCtrl);

    return moduleName;
};

export default {bind};

'use strict';

import gravatar from './lib/gravatar/init';
import scroll from './lib/scroll/init';
import navigation from './lib/navigation/init';
import authentication from './authentication/init';
import upcoming from './upcoming/init';
import routeTable from './route';

angular
    .module('EH', [
        'ngAnimate',
        'ngRoute',
        scroll.bind(),
        authentication.bind(),
        upcoming.bind(),
        gravatar.bind(),
        navigation.bind()
    ])
    .config(routeTable)

    // We should not check if the user are logged in for every view change. Check if we got an 401-response instead
    .run(['$rootScope', '$location', 'AuthenticationRepository', ($root, $location, Auth) => {
        $root.$on('$routeChangeStart', () => {
            if (!Auth.isLoggedIn()) {
                // event.preventDefault();
                $location.path('/register');
            }
        });
    }]);

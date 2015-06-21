'use strict';

import gravatar from './lib/gravatar/init';
import scroll from './lib/scroll/init';
import storage from './lib/storage';
import notify from './lib/notify/init';
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
        storage.bind(),
        notify.bind(),
        navigation.bind()
    ])
    .config(['$routeProvider', routeTable])

    // We should not check if the user are logged in for every view change. Check if we got an 401-response instead
    .run(['$rootScope', '$location', 'AuthenticationService', ($root, $location, Auth) => {
        $root.$on('$routeChangeStart', () => {
            if (!Auth.isLoggedIn()) {
                // event.preventDefault();
                $location.path('/register');
            }
        });
    }]);

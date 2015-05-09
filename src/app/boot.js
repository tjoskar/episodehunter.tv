'use strict';

import gravatar from './lib/gravatar/init';
import navigation from './lib/navigation/init';
import authentication from './authentication/init';
import upcoming from './upcoming/init';
import routeTable from './route';

angular
    .module('EH', [
        'ngAnimate',
        'ngRoute',
        authentication.bind(),
        upcoming.bind(),
        gravatar.bind(),
        navigation.bind()
    ])
    .config(routeTable);

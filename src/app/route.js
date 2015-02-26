'use strict';

let routeTable = ($routeProvider) => {
    $routeProvider

        .when('/', {
            templateUrl: 'app/upcoming/upcoming.html',
            controller: 'UpcomingCtrl',
            controllerAs: 'vm'
        })

        .when('/register', {
            templateUrl: 'app/authentication/register.html',
            controller: 'AuthenticationCtrl',
            controllerAs: 'vm'
        })

        .otherwise({
            redirectTo: '/'
        });

};

export default routeTable;

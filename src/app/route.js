'use strict';

let routeTable = ($routeProvider) => {
    $routeProvider

        .when('/', {
            templateUrl: 'app/upcoming/upcoming.html',
            controller: 'UpcomingCtrl',
            controllerAs: 'vm'
        })

        .when('/mb', {
            template: '<img src="/mb.gif">'
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

'use strict';

let routeTable = ($routeProvider) => {
    $routeProvider

        .when('/', {
            templateUrl: 'app/upcoming/upcoming.html',
            controller: 'UpcomingCtrl',
            controllerAs: 'vm'
        })

        .when('/mb', {
            template: '<img src="/mb.gif">',
        })

        .otherwise({
            redirectTo: '/'
        });

};

export default routeTable;

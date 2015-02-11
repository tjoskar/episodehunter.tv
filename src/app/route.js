'use strict';

let routeTable = ($routeProvider) => {
    $routeProvider

        .when('/', {
            templateUrl: 'app/upcoming/upcoming.html',
            controller: 'UpcomingCtrl',
            controllerAs: 'vm'
        })

        .otherwise({
            redirectTo: '/'
        });

};

export default routeTable;

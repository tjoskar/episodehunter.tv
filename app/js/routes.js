angular.module("EHW").config(function($routeProvider) {

    $routeProvider.when('/', {
        controller: 'AuthController',
    });

    $routeProvider.otherwise({
        redirectTo: '/home'
    });

});

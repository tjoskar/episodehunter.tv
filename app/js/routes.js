angular.module('EHW').config(function($routeProvider) {

    $routeProvider.when('/', {
        controller: 'AuthController',
        templateUrl: 'register.html'
    });

    $routeProvider.otherwise({
        redirectTo: '/home'
    });

});

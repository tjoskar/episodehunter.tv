angular.module('EHW').config(function($routeProvider) {

    $routeProvider.when('/', {
        controller: 'AuthController',
        controllerAs: 'auth',
        templateUrl: 'register.html'
    });

    $routeProvider.otherwise({
        redirectTo: '/home'
    });

});

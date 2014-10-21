angular.module("EHW").config(function($routeProvider) {

    $routeProvider.when('/', {
        controller: 'AuthController',
        template: ''
    });

    $routeProvider.otherwise({
        redirectTo: '/home'
    });

});

angular.module("EHW").config(function($routeProvider) {

    $routeProvider.when('/home', {
      templateUrl: 'upcoming.html',
      controller: 'UpcomingController'
    });

    $routeProvider.when('/tv/:id/:name?/:episode_id?', {
      template: ' ',
      controller: 'TvController'
    });

    $routeProvider.when('/movie/:id/:name?', {
      template: ' ',
      controller: 'MovieController'
    });

    $routeProvider.when('/logout', {
      template: ' ',
      controller: 'LogoutController'
    });

    $routeProvider.otherwise({
      redirectTo: '/home'
    });

});
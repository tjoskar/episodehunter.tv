angular.module("EHW", ["ngRoute"]).config(function($routeProvider) {

    $routeProvider.when('/home', {
      templateUrl: 'upcoming.html',
      controller: 'UpcomingController'
    });

    $routeProvider.when('/tv/:id/:name?/:episode_id?', {
      template: ' ',
      controller: 'TvController'
    });

    $routeProvider.when('/logout', {
      template: ' ',
      controller: 'LogoutController'
    });

    $routeProvider.otherwise({
      redirectTo: '/home'
    });

});


angular.module("EHW").run(function($rootScope) {
    $rootScope.username = "tjoskar";
});

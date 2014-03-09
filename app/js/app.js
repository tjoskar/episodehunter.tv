angular.module("EHW", ["ngRoute"]).config(function($routeProvider) {

    $routeProvider.when('/home', {
      templateUrl: 'upcoming.html',
      controller: 'UpcomingController'
    });

    $routeProvider.otherwise({
      redirectTo: '/home'
    });

});


angular.module("EHW").run(function($rootScope) {
    $rootScope.user_name = "tjoskar";
});

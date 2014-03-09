angular.module("EHW").controller('UpcomingController', function($scope, upcomingRepositories) {

  upcomingRepositories.populate($scope);

});

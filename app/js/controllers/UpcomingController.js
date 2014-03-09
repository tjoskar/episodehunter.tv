angular.module("EHW").controller('UpcomingController', function($scope, upcomingRepositories) {

    $scope.loading_complete = false;

    upcomingRepositories.populate($scope);

});

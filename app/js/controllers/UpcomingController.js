angular.module("EHW").controller('UpcomingController', function($scope, upcomingRepositories, nowWatchingRepositories) {

    $scope.loading_complete = false;

    upcomingRepositories.populate($scope);

    nowWatchingRepositories.populate($scope);

});

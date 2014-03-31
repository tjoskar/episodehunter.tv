/**
 * Upcoming controller
 */
angular.module("EHW").controller('UpcomingController', function($scope, upcomingRepositories, nowWatchingRepositories) {

    // Useful to determine if the user is following any series
    $scope.loading_complete = false;

    upcomingRepositories.populate($scope);

    nowWatchingRepositories.populate($scope);

});

/**
 * Upcoming controller
 */
angular.module("EHW").controller('UpcomingController', function($scope, upcomingRepository, nowWatchingRepository) {

    // Useful to determine if the user is following any series
    $scope.loading_complete = false;

    upcomingRepository.populate($scope);

    nowWatchingRepository.populate($scope);

});

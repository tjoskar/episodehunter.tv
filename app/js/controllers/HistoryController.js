angular.module('EHW').controller('HistoryController', function($scope, historyRepositories) {

    $scope.history = {};

    historyRepositories.populate($scope, 0);

    $scope.numberOfWatchedMovies = 312;
    $scope.numberOfWatchedEpisodes = 2157;
    $scope.numberOfWatchedTvShows = 59;

});

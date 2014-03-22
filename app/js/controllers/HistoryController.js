angular.module('EHW').controller('HistoryController', function($scope, historyRepositories) {

    var batch = 0;

    $scope.history = [];

    historyRepositories.getNumberOfWatched($scope);

    $scope.get = function() {
        $scope.infiniteScrollDisabled = true;
        historyRepositories.populate($scope, batch);
        batch++;
    };

});

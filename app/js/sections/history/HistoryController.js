/**
 * History Controller
 */
angular.module('EHW').controller('HistoryController', function($scope, historyRepository) {

    var batch = 0;

    $scope.history_collection = [];

    historyRepository.getNumberOfWatched($scope);

    $scope.get = function() {
        $scope.infiniteScrollDisabled = true;
        historyRepository.populate($scope, batch);
        batch++;
    };

});

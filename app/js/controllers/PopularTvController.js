angular.module("EHW").controller('PopularTvController', function($scope, popularTvRepository) {

    $scope.time = 0;
    $scope.headline = 'popular tv shows';
    $scope.collection = undefined;
    $scope.processing = false;

    $scope.buttons = [
        {
            'text': 'All Time',
            'disabled': false,
            'time': 0
        },
        {
            'text': '1 Year',
            'disabled': false,
            'time': 31536000
        },
        {
            'text': '3 Months',
            'disabled': true,
            'time': 7776000
        },
        {
            'text': '1 Month',
            'disabled': false,
            'time': 2592000
        },
        {
            'text': '1 Week',
            'disabled': false,
            'time': 604800
        }
    ];


    $scope.get = function(button) {
        if (!$scope.processing) {
            $scope.processing = true;
            angular.forEach($scope.buttons, function(value){
                value.disabled = false;
            });
            button.disabled = true;
            popularTvRepository.populate($scope, button.time);
        }
    };

    $scope.get($scope.buttons[2]);

});

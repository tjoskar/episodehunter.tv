/**
 * Popular movie controller
 */
angular.module('EHW').controller('PopularMovieController', function($scope, popularMovieRepository) {

    /**
     * Current selected time-stamp
     * @type {Number}
     */
    $scope.time = 0;

    /**
     * Headline for the current page
     * @type {String}
     */
    $scope.headline = 'popular movies';

    /**
     * Collection that holds all movie models
     * @type {object}   Collection
     */
    $scope.collection = undefined;

    /**
     * Are we collecting new data right now?
     * This variable is setting to true before and data fetching
     * and back to false after fetching
     * @type {Boolean}
     */
    $scope.processing = false;

    /**
     * The different buttons with their timestamps
     * @type {Array}
     */
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

    /**
     * Fetch new data and populate the $scope
     * @param  {object}     button
     * @return {null}
     */
    $scope.get = function(button) {
        if (!$scope.processing) {
            $scope.processing = true;
            angular.forEach($scope.buttons, function(value){
                value.disabled = false;
            });
            button.disabled = true;
            popularMovieRepository.populate($scope, button.time);
        }
    };

    $scope.get($scope.buttons[2]);

});

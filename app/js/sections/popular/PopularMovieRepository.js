/* global Collection: true, PopularMovieModel: true */

/**
 * Repository for popular movies
 */
angular.module("EHW").factory('popularMovieRepository', function(popularMovieResource) {
    var popularMovieRepository = {};

    /**
     * Populate scope variable with popular movies
     * @param  {scope}      $scope
     * @param  {array}      movies      Array of models
     * @return {null}
     */
    var populateCollection = function($scope, movies) {
        var collection = new Collection();

        for (var i in movies) {
            collection.add(new PopularMovieModel(movies[i]));
        }

        $scope.collection = collection;
        $scope.processing = false;
    };

    /**
     * Get populate movies from storage or remote server if not exist
     * @param  {scope}  $scope
     * @param  {int}    time        time-stamp
     * @return {null}
     */
    popularMovieRepository.populate = function($scope, time) {
        var promise = popularMovieResource.get(time);
        promise.then(function(movies) {
            populateCollection($scope, movies);
        });
    };

    return popularMovieRepository;

});

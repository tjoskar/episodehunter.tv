/* global Collection: true, PopularModel: true, MovieModel: true */

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

        movies.forEach(function(movie) {
            collection.add(new PopularModel({
                parent: MovieModel,
                id: movie.id,
                title: movie.title,
                poster: movie.poster,
                views: movie.views
            }));
        });

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

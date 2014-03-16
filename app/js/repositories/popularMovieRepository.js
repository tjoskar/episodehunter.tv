/* global Collection: true, popularMovieModel: true */
angular.module("EHW").factory('popularMovieRepository', function(popularMovieResource) {
    var popularMovieRepository = {};

    var populateCollection = function($scope, movies) {
        var collection = new Collection();

        for (var i in movies) {
            collection.add(new popularMovieModel(movies[i]));
        }

        $scope.collection = collection;
        $scope.processing = false;
    };

    popularMovieRepository.populate = function($scope, time) {
        var promise = popularMovieResource.get(time);
        promise.then(function(movies) {
            populateCollection($scope, movies);
        });
    };

    return popularMovieRepository;

});

/* global Collection: true, populareEpisodeModel: true */
angular.module("EHW").factory('popularTvRepository', function(popularTvResource) {
    var popularTvRepository = {};

    var populateCollection = function($scope, episodes) {
        var collection = new Collection();

        for (var i in episodes) {
            collection.add(new populareEpisodeModel(episodes[i]));
        }

        $scope.collection = collection;
        $scope.processing = false;
    };

    popularTvRepository.populate = function($scope, time) {
        var promise = popularTvResource.get(time);
        promise.then(function(episodes) {
            populateCollection($scope, episodes);
        });
    };

    return popularTvRepository;

});

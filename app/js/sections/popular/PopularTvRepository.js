/* global Collection: true, PopularEpisodeModel: true */

/**
 * Repository for popular TV series
 */
angular.module("EHW").factory('popularTvRepository', function(popularTvResource) {
    var popularTvRepository = {};

    /**
     * Populate scope variable with popular episodes
     * @param  {scope}      $scope
     * @param  {array}      episodes      Array of models
     * @return {null}
     */
    var populateCollection = function($scope, episodes) {
        var collection = new Collection();

        for (var i in episodes) {
            collection.add(new PopularEpisodeModel(episodes[i]));
        }

        $scope.collection = collection;
        $scope.processing = false;
    };

    /**
     * Get populate TV series from storage or remote server if not exist
     * @param  {scope}  $scope
     * @param  {int}    time        time-stamp
     * @return {null}
     */
    popularTvRepository.populate = function($scope, time) {
        var promise = popularTvResource.get(time);
        promise.then(function(episodes) {
            populateCollection($scope, episodes);
        });
    };

    return popularTvRepository;

});

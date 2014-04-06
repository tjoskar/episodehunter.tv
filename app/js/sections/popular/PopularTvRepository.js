/* global Collection: true, PopularModel: true, EpisodeModel: true */

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

        episodes.forEach(function(episode) {
            collection.add(new PopularModel({
                parent: EpisodeModel,
                seriesID: episode.series_id,
                seriesName: episode.series_name,
                poster: episode.poster,
                views: episode.views
            }));
        });

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

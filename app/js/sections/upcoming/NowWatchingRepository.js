/* global Collection: true, nowWatchingTvModel: true, nowWatchingMovieModel: true */

/**
 * Repository for now watching movies/TV series
 */
angular.module('EHW').factory('nowWatchingRepository', function(nowWatchingResource) {
    var nowWatchingRepository = {};

    /**
     * Populate scope variable with now watching movies/TV series
     * @param  {scope}      $scope
     * @param  {object}
     * @return {null}
     */
    var populateCollection = function(media, $scope) {
        var nowWatching = new Collection();

        for (var m in media.movies) {
            nowWatching.add(new nowWatchingMovieModel(media.movies[m]));
        }

        for (var t in media.tv_shows) {
            nowWatching.add(new nowWatchingTvModel(media.tv_shows[t]));
        }

        nowWatching.shuffle();

        $scope.nowWatching = nowWatching;
    };

    /**
     * Get populate now watching movies/TV series from storage or remote server if not exist
     * @param  {scope}  $scope
     * @return {null}
     */
    nowWatchingRepository.populate = function($scope) {
        var promise = nowWatchingResource.get();

        promise.then(function(episodes) {
            populateCollection(episodes, $scope);
        });

    };

    return nowWatchingRepository;

});

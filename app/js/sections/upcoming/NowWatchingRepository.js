/* global Collection: true, NowWatchingModel: true, MovieModel: true, EpisodeModel: true */

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
            var movie = media.movies[m];
            nowWatching.add(new NowWatchingModel({
                parent: MovieModel,
                id: movie.id,
                title: movie.title,
                poster: movie.poster,
                progress: movie.progress
            }));
        }

        for (var t in media.tv_shows) {
            var episode = media.tv_shows[t];
            nowWatching.add(new NowWatchingModel({
                parent: EpisodeModel,
                seriesID: episode.series_id,
                seriesName: episode.series_name,
                poster: episode.poster,
                progress: episode.progress
            }));
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

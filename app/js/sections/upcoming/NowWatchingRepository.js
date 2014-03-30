/* global Collection: true, nowWatchingTvModel: true, nowWatchingMovieModel: true */
angular.module('EHW').factory('nowWatchingRepository', function(nowWatchingResource) {
    var nowWatchingRepository = {};

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

    nowWatchingRepository.populate = function($scope, force) {
        var promise = nowWatchingResource.get(force);

        promise.then(function(episodes) {
            populateCollection(episodes, $scope);
        });

    };

    return nowWatchingRepository;

});

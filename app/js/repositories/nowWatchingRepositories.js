/* global Collection: true, nowWatchingTvModel: true, nowWatchingMovieModel: true */
angular.module("EHW").factory('nowWatchingRepositories', function(nowWatchingResource) {
  var nowWatchingRepositories = {};

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

  nowWatchingRepositories.populate = function($scope, force) {
    var promise = nowWatchingResource.get(force);
    promise.then(function(episodes) {
      populateCollection(episodes, $scope);
    });
  };

  return nowWatchingRepositories;

});

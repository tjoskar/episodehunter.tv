/* global Collection: true, HistoryTvModel: true, PopularMovieModel: true */
angular.module("EHW").factory('historyRepositories', function(historyResource, authentication) {
    var historyRepositories = {};
    var userTimezone = null;

    var populateCollection = function(media, $scope) {
        var history = new Collection();

        for (var m in media.movies) {
            history.add(new PopularMovieModel(media.movies[m]));
        }

        for (var t in media.tv_shows) {
            history.add(new HistoryTvModel(media.tv_shows[t]));
        }

        history.sortOn('utcTimestamp', true);

        angular.forEach(history.getAll(), function(value){
            var m = moment.tz(value.utcTimestamp, userTimezone);
            var key = m.format('dddd, MMM D YYYY');
            if (!$scope.history[key]) {
                $scope.history[key] = new Collection(key);
            }
            $scope.history[key].add(value);
        });
    };

    historyRepositories.populate = function($scope, batch) {
        var promise = historyResource.get(batch);
        promise.then(function(episodes) {
            if (!userTimezone) {
                authentication.getUser().then(function(user) {
                    userTimezone = user.timezone;
                    populateCollection(episodes, $scope);
                });
            } else {
                populateCollection(episodes, $scope);
            }
        });
    };

    return historyRepositories;

});

/* global Collection: true, HistoryTvModel: true, PopularMovieModel: true */

/**
 * Repository for the history section
 */
angular.module("EHW").factory('historyRepository', function(historyResource, authentication) {

    /**
     * User timezone
     * @type {String|null}
     */
    var userTimezone = null;

    /**
     * @type {Object}
     */
    var historyRepositories = {};

    /**
     * Populate the scope variable with history
     * @param  {object} media       An object with two arrays
     * @param  {scope}  $scope      Current scope
     * @return {null}
     */
    var populateCollection = function(media, $scope) {
        var unsorted_history = new Collection();

        // Stop the infinite load if the both arrays is empty
        if (!media.movies.length && !media.tv_shows.length) {
            $scope.infiniteScrollDisabled = true;
            return;
        }

        for (var m in media.movies) {
            unsorted_history.add(new PopularMovieModel(media.movies[m]));
        }

        for (var t in media.tv_shows) {
            unsorted_history.add(new HistoryTvModel(media.tv_shows[t]));
        }

        // Sort the collection after the time-stamp and to it in reverse order
        unsorted_history.sortOn('utcTimestamp', true);

        // Its time to group it in different collections
        angular.forEach(unsorted_history.getAll(), function(value) {
            var m = moment.tz(value.utcTimestamp, userTimezone);
            var key = m.format('dddd, MMM D YYYY');
            var found_collection = null;

            for (var i in $scope.history) {
                if ($scope.history[i].headline === key) {
                    found_collection = $scope.history[i];
                    break;
                }
            }

            if (!found_collection) {
                found_collection = new Collection(key);
                $scope.history.push(found_collection);
            }

            found_collection.add(value);
        });

        $scope.infiniteScrollDisabled = false;
    };

    /**
     * Get an history list from storage or remote server if not exist
     * @param  {scope}  $scope      Current scope
     * @param  {int}    batch       Current batch
     * @return {null}
     */
    historyRepositories.populate = function($scope, batch) {
        var promise = historyResource.get(batch);

        promise.then(function(media) {
            if (!userTimezone) {
                authentication.getUser().then(function(user) {
                    userTimezone = user.timezone;
                    populateCollection(media, $scope);
                });
            } else {
                populateCollection(media, $scope);
            }
        });

    };

    /**
     * Get the number of watched movies/episodes
     * @param  {scope}  $scope   Current scope
     * @return {null}
     */
    historyRepositories.getNumberOfWatched = function($scope) {
        var promise = historyResource.getNumberOfWatched();

        promise.then(function(numberOfWatched) {
            $scope.numberOfWatchedMovies = numberOfWatched.movies;
            $scope.numberOfWatchedEpisodes = numberOfWatched.episodes;
            $scope.numberOfWatchedTvShows = numberOfWatched.tv_shows;
        });

    };

    return historyRepositories;

});

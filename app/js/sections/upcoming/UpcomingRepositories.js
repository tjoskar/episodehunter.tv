/* global Collection: true, UpcomingEpisode: true */

/**
 * Repository for upcoming TV series
 */
angular.module('EHW').factory('upcomingRepository', function(upcomingResource) {
    var upcomingRepository = {};

    /**
     * Populate scope variable with upcoming episodes
     * @param  {array} episodes Array of episodes model
     * @param  {scope} $scope   Current scope variable
     * @return {null}
     */
    var populateCollection = function(episodes, $scope) {
        var episode, d;
        var thisWeek = new Collection('this week');
        var nextWeek = new Collection('next week');
        var upcoming = new Collection('upcoming');
        var TBA      = new Collection('TBA');

        var now = new Date();
        var thisSunday = EH.getNextSunday(now);
        var nextSunday = EH.getNextSunday(thisSunday);

        for (var i in episodes) {
            episode = episodes[i];
            d = new Date((episode.timestamp || '2014-01-01') + ' 00:00:00');

            if (!episode.episode_id || d <= now) {
                TBA.add(new UpcomingEpisode(episode, $scope));
                continue;
            }

            if (d <= thisSunday) {
                thisWeek.add(new UpcomingEpisode(episode, $scope));
            } else if (thisSunday < d && d <= nextSunday) {
                nextWeek.add(new UpcomingEpisode(episode, $scope));
            } else {
                upcoming.add(new UpcomingEpisode(episode, $scope));
            }
        }

        $scope.episodeCollections = [];
        if (thisWeek.length > 0) {
            $scope.episodeCollections.push(thisWeek);
        }
        if (nextWeek.length > 0) {
            $scope.episodeCollections.push(nextWeek);
        }
        if (upcoming.length > 0) {
            $scope.episodeCollections.push(upcoming);
        }
        if (TBA.length > 0) {
            $scope.episodeCollections.push(TBA);
        }

        $scope.loading_complete = true;
    };

    /**
     * Get upcoming episodes from storage or remote server it not exist
     * @param  {scope} $scope
     * @return {null}
     */
    upcomingRepository.populate = function($scope) {
        var promise = upcomingResource.get();
        promise.then(function(episodes) {
            populateCollection(episodes, $scope);
        });
    };

    return upcomingRepository;

});

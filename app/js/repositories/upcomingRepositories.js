/* global Collection: true, UpcomingEpisode: true */
angular.module("EHW").factory('upcomingRepositories', function(upcomingResource) {
  var upcomingRepositories = {};

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
      if (!EH.isset(episode.episode_id) || d <= now) {
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

  upcomingRepositories.populate = function($scope, force) {
    var promise = upcomingResource.get(force);
    promise.then(function(episodes) {
      populateCollection(episodes, $scope);
    });
  };

  return upcomingRepositories;

});

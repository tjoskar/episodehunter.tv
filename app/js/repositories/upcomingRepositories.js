/* global EpisodeCollection: true, Episode: true */
angular.module("EHW").factory('upcomingRepositories', function($http) {
  var upcomingRepositories = {};

  var populateCollection = function(episodes, $scope) {
    var episode, d;
    var thisWeek = new EpisodeCollection('this week');
    var nextWeek = new EpisodeCollection('next week');
    var upcoming = new EpisodeCollection('upcoming');
    var TBA      = new EpisodeCollection('TBA');

    var now = new Date();
    var thisSunday = EH.getNextSunday(now);
    var nextSunday = EH.getNextSunday(thisSunday);

    for (var i in episodes) {
      episode = episodes[i];
      d = new Date((episode.timestamp || '2014-01-01') + ' 00:00:00');
      if (!EH.isset(episode.episodeid) || d <= now) {
        TBA.addEpisode(new Episode(episode, $scope));
        continue;
      }

      if (d <= thisSunday) {
        thisWeek.addEpisode(new Episode(episode, $scope));
      } else if (thisSunday < d && d <= nextSunday) {
        nextWeek.addEpisode(new Episode(episode, $scope));
      } else {
        upcoming.addEpisode(new Episode(episode, $scope));
      }
    }

    $scope.episodeCollections = [];
    if (thisWeek.getEpisodes().length > 0) {
      $scope.episodeCollections.push(thisWeek);
    }
    if (nextWeek.getEpisodes().length > 0) {
      $scope.episodeCollections.push(nextWeek);
    }
    if (upcoming.getEpisodes().length > 0) {
      $scope.episodeCollections.push(upcoming);
    }
    if (TBA.getEpisodes().length > 0) {
      $scope.episodeCollections.push(TBA);
    }

    $scope.loading_complete = true;
  };

  upcomingRepositories.updateList = function($scope) {
    EH.ajaxStart();
    $http.post(EH.url.api+'tv/upcoming', {
      'username': 'tjoskar',
      'apikey': 'something'
    }).success(function(episodes) {
      EH.ajaxStop();
      if (EH.isset(episodes.value)) {
        populateCollection(episodes.value, $scope);
      } else {
        console.log('Can not connect to the server, try again later');
      }
    }).error(function() {
      EH.ajaxStop();
      console.log('Can not connect to the server, try again later 2');
    });
  };

  upcomingRepositories.populate = function($scope) {
    this.updateList($scope);
  };

  return upcomingRepositories;

});

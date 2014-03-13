angular.module("EHW").factory('upcomingResource', function($q, resource, storage) {
  var upcomingResource = {};
  var storageName = 'upcoming_episode';
  var cacheTime = 86400000; // 24*60*60*1000

  upcomingResource.get = function(force) {
    force = force || false;
    var deferred = $q.defer();

    // Check if cache exist, otherwise get new data from server
    var episodes = storage.get(storageName);
    if (!episodes || storage.isObsolete()) {
      resource.get('/api/v2/tv/upcoming').then(function(episodes) {
        storage.set(storageName, episodes, cacheTime);
        deferred.resolve(episodes);
      }, function() {
        deferred.reject();
      });
    } else {
      deferred.resolve(episodes);
    }

    return deferred.promise;
  };

  return upcomingResource;

});

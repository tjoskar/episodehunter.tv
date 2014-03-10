angular.module("EHW").factory('upcomingResource', function($q, resource) {
  var upcomingResource = {};

  upcomingResource.get = function(force) {
    force = force || false;
    var deferred = $q.defer();

    // Check if cache exist, otherwise get new data from server
    resource.get('/api/tv/upcoming').then(function(episodes) {
      // Cache #1
      deferred.resolve(episodes);
    }, function() {
      deferred.reject();
    });

    return deferred.promise;
  };

  return upcomingResource;

});

angular.module("EHW").factory('authenticationResource', function($q, resource, storage) {

  var authenticationResource = {};
  var storageName = 'user';

  authenticationResource.get = function() {
    var deferred = $q.defer();
    var user = storage.get(storageName);

    if (!user) {
      resource.get('/api/v2/user').then(function(user) {
        storage.set(storageName, user);
        deferred.resolve(user);
      }, function() {
        deferred.reject();
      });
    } else {
      deferred.resolve(user);
    }

    return deferred.promise;
  };

  return authenticationResource;

});

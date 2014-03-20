angular.module("EHW").factory('historyResource', function($q, resource, storage) {
    var upcomingResource = {};
    var cacheTime = 1800000; // 30*60*1000

    upcomingResource.get = function(batch) {
        batch = batch || 0;
        var storageName = 'history_' + batch;
        var deferred = $q.defer();

        var media = storage.get(storageName);
        if (!media || storage.isObsolete()) {
            resource.get('/api/v2/history/' + batch).then(function(media) {
                storage.set(storageName, media, cacheTime);
                deferred.resolve(media);
            }, function() {
                deferred.reject();
            });
        } else {
            deferred.resolve(media);
        }

        return deferred.promise;
    };

    return upcomingResource;

});

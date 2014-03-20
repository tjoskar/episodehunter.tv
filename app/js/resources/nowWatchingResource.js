angular.module("EHW").factory('nowWatchingResource', function($q, resource, storage) {
    var nowWatchingResource = {};
    var storageName = 'now_watching';
    var cacheTime = 600000; // 10*60*1000

    nowWatchingResource.get = function(force) {
        force = force || false;
        var deferred = $q.defer();

        // Check if cache exist, otherwise get new data from server
        var nowWatching = storage.get(storageName);
        if (!nowWatching || storage.isObsolete()) {
            resource.get('/api/v2/nowwatcing').then(function(media) {
                storage.set(storageName, media, cacheTime);
                deferred.resolve(media);
            }, function() {
                deferred.reject();
            });
        } else {
            deferred.resolve(nowWatching);
        }

        return deferred.promise;
    };

    return nowWatchingResource;

});

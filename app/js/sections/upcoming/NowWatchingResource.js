/**
 * Resource for now watching movies/TV series
 */
angular.module('EHW').factory('nowWatchingResource', function($q, resource, storage) {
    var nowWatchingResource = {};

    /**
     * Name for the object in storage
     * @type {String}
     */
    var storageName = 'now_watching';

    /**
     * Time for the object to be valid in storage
     * @type {Number}
     */
    var cacheTime = 600000; // 10*60*1000

    /**
     * Get now watching movies/TV series from storage or remote server it not exist
     * @return {null}
     */
    nowWatchingResource.get = function() {
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

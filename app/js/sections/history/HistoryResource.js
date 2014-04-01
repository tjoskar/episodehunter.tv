/**
 * Resource for history
 */
angular.module("EHW").factory('historyResource', function($q, resource, storage) {
    var upcomingResource = {};

    /**
     * Get history from storage or remote server it not exist
     * @param  {int}     batch   current batch
     * @return {null}
     */
    upcomingResource.get = function(batch) {
        batch = batch || 0;
        var cacheTime = 1800000; // 30*60*1000
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

    /**
     * Get the number of watched movies/episodes from storage or remote server if not exist
     * @return {null}
     */
    upcomingResource.getNumberOfWatched = function() {
        var cacheTime = 86400000; // 24*60*60*1000
        var storageName = 'history_number_watched';
        var deferred = $q.defer();

        var watched = storage.get(storageName);
        if (!watched || storage.isObsolete()) {

            resource.get('/api/v2/history/number-watched').then(function(watched) {
                storage.set(storageName, watched, cacheTime);
                deferred.resolve(watched);
            }, function() {
                deferred.reject();
            });

        } else {
            deferred.resolve(watched);
        }

        return deferred.promise;
    };

    return upcomingResource;

});

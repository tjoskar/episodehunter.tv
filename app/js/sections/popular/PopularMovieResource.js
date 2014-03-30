angular.module('EHW').factory('popularMovieResource', function($q, resource, storage) {
    var popularMovieResource = {};
    var cacheTime = 86400000; // 24*60*60*1000

    popularMovieResource.get = function(time) {
        var deferred = $q.defer();
        var storageName = 'popular_movie' + '_' + time;

        var episodes = storage.get(storageName);
        if (!episodes || storage.isObsolete()) {
            resource.get('/api/v2/movie/popular/' + time).then(function(episodes) {
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

    return popularMovieResource;

});

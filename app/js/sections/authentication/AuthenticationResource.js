/**
 * Resource for users
 */
angular.module('EHW').factory('authenticationResource', function($q, resource, storage) {

    /**
     * Prefix in storage
     * @type {String}
     */
    var storageName = 'user';

    /**
     * @type {Object}
     */
    var authenticationResource = {};

    /**
     * Get an user from storage of server if not exist
     * @return {[type]} [description]
     */
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

angular.module("EHW").factory('authentication', function(storage, authenticationResource) {

    var authentication = {};

    /**
     * Return a user object from local-storage if exist
     * @return {object}
     */
    authentication.getUser = function() {
        return authenticationResource.get();
    };

    /**
     * Clear all saved data and logout the user
     * @return {null}
     */
    authentication.logout = function() {
        storage.clearAll();
        window.location.replace('/logout');
    };

    return authentication;

});

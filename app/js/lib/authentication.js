angular.module("EHW").factory('authentication', function(storage, authenticationResource) {

    var authentication = {};

    authentication.getUser = function() {
        return authenticationResource.get();
    };

    authentication.logout = function() {
        storage.clearAll();
        window.location.replace('/logout');
    };

    return authentication;

});

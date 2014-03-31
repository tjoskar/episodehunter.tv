/**
 * Logout controller
 */
angular.module("EHW").controller('LogoutController', function(authentication) {

    authentication.logout();

});

angular.module("EHW").controller('LogoutController', function(authentication) {

    authentication.logout();

});

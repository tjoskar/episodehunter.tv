angular.module("EHW").controller('LogoutController', function(storage) {

    storage.clear();
    window.location.replace('/logout');

});

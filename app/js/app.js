angular.module("EHW", ["ngRoute"]);


angular.module("EHW").run(function($rootScope, authentication) {

    // Get the user on boot
    authentication.getUser().then(function(user) {
        $rootScope.username = user.username;
    });

    moment.lang('en');

});

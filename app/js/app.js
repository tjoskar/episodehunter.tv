angular.module("EHW", ["ngRoute"]);


angular.module("EHW").run(function($rootScope, authentication) {

    authentication.getUser().then(function(user) {
        $rootScope.username = user.username;
    });

});

angular.module("EHW").factory('resource', function($rootScope, $http, $q) {

    var ongoingHTTPCounter = 0;

    var httpStart = function() {
        ongoingHTTPCounter++;

        if (ongoingHTTPCounter === 1) {
            EH.ajaxStart();
        }

        $rootScope.$broadcast('httpStart', ongoingHTTPCounter);
    };

    var httpEnd = function() {
        ongoingHTTPCounter--;

        if (ongoingHTTPCounter === 0) {
            EH.ajaxStop();
        }

        $rootScope.$broadcast('httpEnd', ongoingHTTPCounter);
    };

    var errorHandler = function(data, status) {
        if (status === 401) {
            console.log('Logout user');
        } else {
            console.log('Show error message');
        }
    };

    return {

        get: function(url) {
            var deferred = $q.defer();
            httpStart();

            $http.get(url).success(function(data) {
                httpEnd();
                if (data && angular.isDefined(data.value)) {
                    deferred.resolve(data.value);
                } else {
                    console.log('Show error message');
                    deferred.reject();
                }
            }).error(function(data, status) {
                httpEnd();
                errorHandler(data, status);
                deferred.reject();
            });

            return deferred.promise;
        },

        post: function(url, postData) {
            var deferred = $q.defer();
            EH.ajaxStart();

            $http.post(url, postData).success(function(data) {
                httpEnd();
                if (data && angular.isDefined(data.value)) {
                    deferred.resolve(data.value);
                } else {
                    console.log('Show error message');
                    deferred.reject();
                }
            }).error(function(data, status) {
                httpEnd();
                errorHandler(data, status);
                deferred.reject();
            });

            return deferred.promise;
        }

    };

});

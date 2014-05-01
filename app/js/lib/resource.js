/**
 * Helper function to make HTTP calls
 */
angular.module("EHW").factory('resource', function($http, $q) {

    /**
     * Number of ongoing HTTP calls
     * @type {Number}
     */
    var ongoingHTTPCounter = 0;

    /**
     * Start "loading" effect if it is the first call.
     * Broadcast 'httpStart' event
     * @return {null}
     */
    var httpStart = function() {
        ongoingHTTPCounter++;

        if (ongoingHTTPCounter === 1) {
            EH.trigger('httpStart', ongoingHTTPCounter);
        }
    };

    /**
     * Stop "loading" effect
     * Broadcast 'httpEnd' event
     * @return {null}
     */
    var httpEnd = function() {
        ongoingHTTPCounter--;

        if (ongoingHTTPCounter === 0) {
            EH.trigger('httpEnd', ongoingHTTPCounter);
        }
    };

    /**
     * An global error handler
     * @param  {object} data   Response body
     * @param  {int}    status HTTP status code
     * @return {null}
     */
    var errorHandler = function(data, status) {
        if (status === 401) {
            console.log('Logout user');
        } else {
            console.log('Show error message');
        }
    };

    return {

        /**
         * Create an GET request
         * @param  {string} url
         * @return {promise}
         */
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

        /**
         * Create an POST request
         * @param  {string} url
         * @param  {object} postData
         * @return {promise}
         */
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

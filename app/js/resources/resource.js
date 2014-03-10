angular.module("EHW").factory('resource', function($http, $q) {

  return {

    get: function(url) {
      var deferred = $q.defer();
      EH.ajaxStart();

      $http.get(url).success(function(data) {
        EH.ajaxStop();
        if (EH.isset(data) && EH.isset(data.value)) {
          deferred.resolve(data.value);
        } else {
          console.log('Show error message');
          deferred.reject();
        }
      }).error(function(data, status) {
        EH.ajaxStop();
        if (status === 401) {
          console.log('Logout user');
        } else {
          console.log('Show error message');
        }
      });

      return deferred.promise;
    },

    post: function(url, post_data) {
      var deferred = $q.defer();
      EH.ajaxStart();

      $http.post(url, post_data).success(function(data) {
        EH.ajaxStop();
        if (EH.isset(data) && EH.isset(data.value)) {
          deferred.resolve(data.value);
        } else {
          console.log('Show error message');
          deferred.reject();
        }
      }).error(function(data, status) {
        EH.ajaxStop();
        if (status === 401) {
          console.log('Logout user');
        } else {
          console.log('Show error message');
        }
        deferred.reject();
      });

      return deferred.promise;
    }

  };

});

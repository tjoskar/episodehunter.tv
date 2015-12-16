/**
 * Auth controller
 */

(function(angular) {

    angular
        .module('EHW')
        .controller('AuthController', AuthController);

    function AuthController($scope) {
        'use strict';

        var vm = this;

        $scope.$watch(vm.username, function(newValue) {
            console.log(newValue);
        });
        vm.username = 'tjoskar';
        vm.email = 'mr.karlsson.oskar@gmail.com';

        console.log('AuthController');
    }

})(angular);

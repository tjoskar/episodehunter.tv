/**
 * Header controller
 */
angular.module("EHW").controller('HeaderController', function($scope, $mdSidenav) {

    console.log('HeaderController');

    $scope.toggleSidenav = function() {
        console.log('hej hej');
        $mdSidenav('left').toggle();
    };
});

'use strict';

// Copyright (c) 2015 Maxi Gimenez
// The following code is a fork of angular-atomic-notify
// https://github.com/maxigimenez/angular-atomic-notify

var moduleName = 'atomic-notify';

angular
    .module(moduleName, [])
    .config(['$provide', function($provide){
        $provide.provider('atomicNotify', function(){

            var settings = {
                delay: 0,
                useicon: true
            };

            this.setDefaultDelay = function(delay){
                settings.delay = delay;
            };

            this.useIconOnNotification = function(use){
                settings.useicon = use;
            };

            this.$get = function() {
                return settings;
            };

        });
    }])
    .service('atomicNotifyService', ['atomicNotify', function(atomicNotify){

        var exports = {};

        var directive;
        window.setTimeout(function() {
            directive = angular.element('ng-atomic-notify').isolateScope();
        });

        var displayNotify = function(options, delay){
            directive.addItem({
                type: options.type,
                icon: ((atomicNotify.useicon) ? options.icon : false),
                text: options.text
            }, delay || atomicNotify.delay);
        };

        exports.success = function(message, delay){
            displayNotify({
                type: 'success',
                icon: 'fa fa-check',
                text: message
            }, delay);
        };

        exports.error = function(message, delay){
            displayNotify({
                type: 'error',
                icon: 'error_outline',
                text: message,
                delay: delay
            }, delay);
        };

        exports.info = function(message, delay){
            displayNotify({
                type: 'info',
                icon: 'info_outline',
                text: message
            }, delay);
        };

        exports.warning = function(message, delay){
            displayNotify({
                type: 'warning',
                icon: 'fa fa-exclamation',
                text: message
            }, delay);
        };

        exports.custom = function(type, message, iconClass, delay){
            displayNotify({
                type: type,
                icon: iconClass,
                text: message
            }, delay);
        };

        return exports;

    }])
    .directive('ngAtomicNotify', ['$compile', '$timeout', function($compile, $timeout){

        var link = function($scope, element, attr){
            var template = `
                <div class="atomic-notify">
                    <div class="atomic-notify-item" ng-repeat="item in items" ng-class="discoverClass(item)">
                        <div class="icon" ng-if="item.icon">
                            <i class="material-icons">{{item.icon}}</i>
                        </div>
                        <div class="body">
                            <p>{{item.text}}</p>
                        </div>
                        <button type="button" class="close" ng-click="dismiss(item)">&times;</button>
                    </div>
                </div>`;

            if(angular.isString(attr.customTemplate)){
                $scope.templateUrl = attr.customTemplate;
                template = '<ng-include src="templateUrl" />';
            }

            element.html(template);
            $compile(element.contents())($scope);
        };

        var controller = ['$scope', function($scope){
            $scope.items = [];

            $scope.addItem = function(options, delay){
                $scope.items.push(options);
                if(delay > 0){
                    $timeout(function(){
                        $scope.dismiss(options);
                    }, delay);
                }
            };

            $scope.dismiss = function(item){
                var index = $scope.items.indexOf(item);
                $scope.items.splice(index, 1);
            };

            $scope.discoverClass = function(item){
                return 'atomic-notify-' + item.type;
            };
        }];

        return {
            scope: {},
            restrict: 'E',
            link: link,
            controller: controller
        };

    }]);

export default moduleName;
export {moduleName as NotifyGui};

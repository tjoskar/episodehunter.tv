(function(angular) {
    'use strict';

    function GravatarService(md5) {
        var Gravatar = {};

        Gravatar.getImageSrc = function (email, secure) {
            var hash = md5.createHash(email.toLowerCase());
            var src = (secure ? 'https://secure' : 'http://www' ) + '.gravatar.com/avatar/' + hash + '?d=404';
            return src;
        };

        return Gravatar;
    }

    angular
        .module('EHW.gravatar')
        .factory('gravatarService', ['md5', GravatarService]);

})(angular);


angular.module('EHW.utilities', []);
angular.module('EHW.gravatar', ['EHW.utilities']);
angular.module('EHW', ['ngRoute', 'ngAnimate', 'EHW.gravatar']);

angular.module('EHW').run(function() {

});

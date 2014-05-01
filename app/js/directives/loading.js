angular.module('EHW').directive('ehLoading', function() {
    return {

        restrict: 'A', // Only attribute

        link: function(scope, element) {
            EH.on('httpStart', function() {
                element.fadeIn('fast');
                element.animate({
                    width: '80%',
                }, 800);
            }, null, true);

            EH.on('httpEnd', function() {
                element.animate({
                    width: '100%',
                }, 200);

                setTimeout(function() {
                    element.fadeOut('slow', function() {
                        element.css({'width': '0%'});
                    });
                }, 200);
            }, null, true);
        }
    };
});

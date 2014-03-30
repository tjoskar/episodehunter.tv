/**
 * @todo Make this to work
 */


angular.module('EHW').directive('ehKnob', function() {
    return {

        restrict: 'E', // Only element

        scope: {
            width: '=width',
            progress: '=progress'
        },

        template:
                '<input type="text" class="knob" data-width="{{ width }}" data-angleOffset=-125 data-angleArc=250 data-fgColor="#03A37E" data-readOnly=true value="{{ progress }}">',

        link : function(scope, element) {
            $(element).find('input').knob();
            var poster = element.parent().parent().parent().parent();
            window.k = $(element).find('input');
            poster.bind('mouseenter', function() {
                poster.find('.knob-data').show();
            });
            poster.bind('mouseleave', function() {
                poster.find('.knob-data').hide();
            });
        }
    };
});

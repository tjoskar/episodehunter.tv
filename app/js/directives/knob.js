angular.module("EHW").directive('ehKnob', function() {
    return {
        restrict: 'E',
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

// angular.module('EHW').directive('ehKnob', function () {
//     return {
//       restrict: 'EACM',
//       template: '' +
//             '<div class="knob-holder">'+
//                 '<input type="text" class="knob" data-width="{{ width }}" data-angleOffset=-125 data-angleArc=250 data-fgColor="#03A37E" data-readOnly=true value="{{ progress }}">' +
//             '</div>',
//       replace: true,
//       scope: true,
//       link: function (scope, elem, attrs) {

//         scope.knob = scope.$eval(attrs.knobData);

//         var renderKnob = function(){

//           scope.knob = scope.$eval(attrs.knobData);

//           var opts = {};
//           if(!angular.isUndefined(attrs.knobOptions)){
//             opts = scope.$eval(attrs.knobOptions);
//           }

//           if(!angular.isUndefined(attrs.knobMax)){
//             var max = scope.$eval(attrs.knobMax);
//             if(!angular.isUndefined(max)){

//               opts.max = max;

//             }
//           }

//           $elem = $(elem);
//           $elem.val(scope.knob);
//           $elem.change();
//           $elem.knob(opts);

//         };
//       }
//     };
//   });

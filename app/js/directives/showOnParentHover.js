angular.module("EHW").directive('showOnParentHover', function() {
  return {
    link : function(scope, element, attrs) {
      var poster = element.parent().parent();
      var show_name = element.parent().children('.show-name');
      poster.bind('mouseenter', function() {
        show_name.css('bottom', '49px');
        element.show();
      });
      poster.bind('mouseleave', function() {
        show_name.css('bottom', '0px');
        element.hide();
      });
    }
  };
});

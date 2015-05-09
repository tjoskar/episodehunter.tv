function NavigationDirective() {
    var directive = {
        templateUrl: 'app/lib/navigation/navigation.html',
        link: link
    };

    function link(scope, element) {
        if (false) {
            element.hide();
        }
    }

    return directive;

}

export default NavigationDirective;

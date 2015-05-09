function NavigationDirective(AuthenticationRepository) {
    var directive = {
        templateUrl: 'app/lib/navigation/navigation.html',
        link: link
    };

    function link(scope, element) {
        if (!AuthenticationRepository.areLoggedin()) {
            element.hide();
        }
    }

    return directive;

}

NavigationDirective.$inject = ['AuthenticationRepository'];

export default NavigationDirective;
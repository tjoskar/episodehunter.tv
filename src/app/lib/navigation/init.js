import NavigationDirective from './navigation.directive';

var bind = () => {
    var directiveName = 'EH.directive.navigation';

    angular
        .module(directiveName, [])
        .directive('ehNav', [NavigationDirective]);

    return directiveName;
};

export default {bind};

'use strict';

function RegisterForm(scroll) {
    var directive = {
        transclude: true,
        scope: false,
        link: link,
        template: [
            '<div class="auth--flying-button">',
                '<a ng-click="dir.flyingButton()" style="margin: 10px" class="waves-effect waves-light btn">{{dir.flyingButtonText}}</a>',
                '<a ng-click="dir.flyingButton(\'forgot\')" style="margin: 10px" class="waves-effect waves-light btn">Forgot</a>',
            '</div>',
            '<ng-transclude></ng-transclude>'].join('')
    };

    function link(scope, element) {
        var registerSection = element.find('#js-register-section');
        var emailRow = element.find('#js-email-row');
        var passwordRow = element.find('#js-password-row');
        var emailInput = element.find('#email');
        var usernameInput = element.find('#username');
        var state;

        const STATES = {
            login: {
                submitText: 'Login',
                flyingButtonText: 'Register',
                fadeOut: [emailRow],
                fadeIn: [passwordRow],
                focus: usernameInput,
                submit: scope.vm.login.bind(scope.vm),
                next: 'register'
            },
            register: {
                submitText: 'Register',
                flyingButtonText: 'Login',
                fadeOut: [],
                fadeIn: [passwordRow, emailRow],
                focus: emailInput,
                submit: scope.vm.register.bind(scope.vm),
                next: 'login'
            },
            forgot: {
                submitText: 'Request new password',
                flyingButtonText: 'Login',
                fadeOut: [emailRow, passwordRow],
                fadeIn: [],
                focus: usernameInput,
                submit: scope.vm.forgot.bind(scope.vm),
                next: 'login'
            }
        };

        state = STATES.register;

        scope.dir = {
            flyingButtonText: state.flyingButtonText,
            submitButtonText: state.submitText,

            registerButton: () => {
                state = STATES.login;
                scope.dir.flyingButton();
            },
            flyingButton: nextState => {
                state = STATES[nextState || state.next];
                scope.dir.submitButtonText = state.submitText;
                scope.dir.flyingButtonText = state.flyingButtonText;
                state.fadeOut.forEach(elm => elm.fadeTo(200, 0));
                state.fadeIn.forEach(elm => elm.fadeTo(200, 1));
                scroll.toElement(registerSection, 200, () => {
                    state.focus.focus();
                });
            },
            submit: () => {
                state.submit();
            }
        };
    }

    return directive;

}

RegisterForm.$inject = ['scrollToElement'];

export default RegisterForm;

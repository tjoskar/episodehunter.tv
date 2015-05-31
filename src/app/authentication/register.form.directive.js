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
        var form = element.find('form');
        var registerSection = element.find('#js-register-section');
        var emailRow = form.find('#js-email-row');
        var passwordRow = form.find('#js-password-row');
        var emailInput = form.find('#email');
        var usernameInput = form.find('#username');
        var submitButton = form.find('button');
        var state;
        var submit = action => {
            form.css('opacity', '0.2');
            scope.dir.showSpinner = true;
            submitButton.addClass('disabled');
            action.call(scope.vm)
                .catch(error => {
                    if (error.show) {
                        error.show();
                    }
                })
                .finally(() => {
                    form.css('opacity', '1');
                    scope.dir.showSpinner = false;
                    submitButton.removeClass('disabled');
                });
        };

        const STATES = {
            login: {
                submitText: 'Login',
                flyingButtonText: 'Register',
                fadeOut: [emailRow],
                fadeIn: [passwordRow],
                focus: usernameInput,
                submit: submit.bind(undefined, scope.vm.login),
                next: 'register'
            },
            register: {
                submitText: 'Register',
                flyingButtonText: 'Login',
                fadeOut: [],
                fadeIn: [passwordRow, emailRow],
                focus: emailInput,
                submit: submit.bind(undefined, scope.vm.register),
                next: 'login'
            },
            forgot: {
                submitText: 'Request new password',
                flyingButtonText: 'Login',
                fadeOut: [emailRow, passwordRow],
                fadeIn: [],
                focus: usernameInput,
                submit: submit.bind(undefined, scope.vm.forgot),
                next: 'login'
            }
        };

        state = STATES.register;

        scope.dir = {
            showSpinner: false,
            flyingButtonText: state.flyingButtonText,
            submitButtonText: state.submitText,

            registerButton: () => {
                state = STATES.login;
                scope.dir.flyingButton();
            },
            flyingButton: nextState => {
                scope.vm.emailadress = '';
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
                if (!scope.dir.showSpinner) {
                    state.submit();
                }
            }
        };
    }

    return directive;

}

RegisterForm.$inject = ['scrollToElement'];

export default RegisterForm;

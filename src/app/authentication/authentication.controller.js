'use strict';
import timezoneGuess from '../lib/guess.timezone';


class AuthenticationCtrl {

    static $inject = ['$location', 'AuthenticationService', 'notify'];

    constructor($location, authService, notify) {
        this.username = '';
        this.emailadress = '';
        this.password = '';
        this.timezone = timezoneGuess();

        this.notify = notify;
        this.authService = authService;
        this.$location = $location;
    }

    register() {
        if (!this.username || !this.emailadress || !this.password) {
            return this.notify.reject('You have to enter a username, password and email');
        }

        return this.authService
            .register({
                email: this.emailadress,
                username: this.username,
                password: this.password,
                timezone: this.timezone
            })
            .then(data => {
                this.$location.path('/');
                return data;
            });
    }

    login() {
        if (!this.username || !this.password) {
            return this.notify.reject('You have to enter both username and password');
        }

        return this.authService
            .login(this.username, this.password)
            .then(data => {
                this.$location.path('/');
                return data;
            });
    }

    forgot() {
        return this.authService
            .forgotPassword(this.username)
            .then(data => {
                this.notify.createInfo(data.data).show();
                return data;
            });
    }

}

export default AuthenticationCtrl;

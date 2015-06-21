'use strict';
import timezoneGuess from '../lib/guess.timezone';


class AuthenticationCtrl {

    static $inject = ['AuthenticationService', 'notify'];

    constructor(authService, notify) {
        this.username = '';
        this.emailadress = '';
        this.password = '';
        this.timezone = timezoneGuess();

        this.notify = notify;
        this.authService = authService;
    }

    register() {
        if (!this.username || !this.emailadress || !this.password) {
            return this.notify.reject('intern', 'You have to enter a username, password and email');
        }

        return this.authService
            .register({
                email: this.emailadress,
                username: this.username,
                password: this.password,
                timezone: this.timezone
            })
            .then(data => {
                console.log('gött', data);
                return data;
            });
    }

    login() {
        if (!this.username || !this.password) {
            return this.notify.reject('intern', 'You have to enter both username and password');
        }

        return this.authService
            .login(this.username, this.password)
            .then(data => {
                console.log('All went well: ', data);
                return data;
            });
    }

    forgot() {
        return this.authService
            .forgotPassword(this.username)
            .then(data => {
                console.log('gött', data);
                return data;
            });
    }

}

export default AuthenticationCtrl;

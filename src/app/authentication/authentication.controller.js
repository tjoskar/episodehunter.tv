'use strict';
import timezoneGuess from '../lib/guess.timezone';


class AuthenticationCtrl {

    constructor(authService) {
        this.username = '';
        this.emailadress = '';
        this.password = '';
        this.timeZone = timezoneGuess();

        this.authService = authService;
    }

    register() {
        console.log('register', this.emailadress, this.username, this.password, arguments);
    }

    login() {
        return this.authService.login(this.username, this.password).then(data => {
            console.log('All went well: ', data);
        });
    }

    forgot() {
        console.log('forgot', this.username, this.password, arguments);
    }

}

AuthenticationCtrl.$inject = ['AuthenticationService'];

export default AuthenticationCtrl;

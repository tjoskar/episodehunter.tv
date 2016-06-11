import {Component} from '@angular/core';
import Spinner from '../lib/spinner.component';
import AuthService from './auth.service';

@Component({
    selector: 'eh-login',
    templateUrl: 'script/authentication/templates/login.html',
    directives: [Spinner]
})
class LoginComponent {
    serrverError = '';
    model;
    loading = false;
    authService: AuthService;

    constructor(authService: AuthService) {
        this.authService = authService;
        this.model = {
            username: '',
            password: ''
        };
    }

    onSubmit() {
        this.loading = true;
        this.serrverError = '';
        this.authService
            .createToken(this.model.username, this.model.password)
            .finally(() => this.loading = false)
            .subscribe(
                done => window.location.href = '/',
                error => this.serrverError = error
            );
    }

}

export default LoginComponent;

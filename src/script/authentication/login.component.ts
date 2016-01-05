import {Component} from 'angular2/core';
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
        this.authService
            .createToken(this.model.username, this.model.password)
            // .finally(() => {
            //     this.loading = false;
            //     console.log('Done');
            // })
            .subscribe(
                done => console.log(done),
                error => this.serrverError = error.message
            );
    }

}

export default LoginComponent;

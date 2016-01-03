import {Component, Output, EventEmitter} from 'angular2/core';
import Spinner from '../lib/spinner.component';

@Component({
    selector: 'eh-login',
    templateUrl: 'dist/authentication/templates/login.html',
    directives: [Spinner]
})
class LoginComponent {
    serrverError = {};
    model;
    loading = false;

    constructor() {
        this.model = {
            username: '',
            password: ''
        };
    }

    onSubmit() {
        this.loading = true;
    }

}

export default LoginComponent;

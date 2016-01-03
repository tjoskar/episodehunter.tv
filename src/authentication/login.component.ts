import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'eh-login',
    templateUrl: 'dist/authentication/templates/login.html',
    directives: [],
    providers: [],
})
class LoginComponent {
    @Output() submit = new EventEmitter();
    serrverError = {};
    model;

    constructor() {
        this.model = {
            username: '',
            password: ''
        };
    }

    onSubmit() {
        this.submit.emit('loadding');
    }

}

export default LoginComponent;

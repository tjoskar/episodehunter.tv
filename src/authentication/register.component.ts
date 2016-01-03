import 'rxjs/add/operator/map';
import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'eh-register',
    templateUrl: 'dist/authentication/templates/register.html',
    directives: [],
    providers: [],
})
class RegisterComponent {
    @Output() submit = new EventEmitter();
    serrverError = {};
    model;

    constructor() {
        this.model = {
            email: '',
            username: '',
            password: ''
        };
    }

    onSubmit() {
        this.submit.emit('loadding');
    }

}

export default RegisterComponent;

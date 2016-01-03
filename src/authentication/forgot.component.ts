import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'eh-forgot',
    templateUrl: 'dist/authentication/templates/forgot.html',
    directives: [],
    providers: [],
})
class ForgotComponent {
    @Output() submit = new EventEmitter();
    serrverError = {};
    model;

    constructor() {
        this.model = {
            email: ''
        };
    }

    onSubmit() {
        this.submit.emit('loadding');
    }

}

export default ForgotComponent;

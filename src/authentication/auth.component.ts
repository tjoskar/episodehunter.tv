import 'rxjs/add/operator/map';
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import RegisterComponent from './register.component';
import ForgotComponent from './forgot.component';
import LoginComponent from './login.component';
import RouteAndScroll from '../lib/route-and-scroll.directive';

@Component({
    selector: 'eh-auth',
    templateUrl: 'dist/authentication/templates/signup.html',
    directives: [ROUTER_DIRECTIVES, RouteAndScroll]
})
@RouteConfig([
    {path: '/register', name: 'Register', component: RegisterComponent, useAsDefault: true},
    {path: '/login', name: 'Login', component: LoginComponent},
    {path: '/forgot', name: 'Forgot', component: ForgotComponent}
])
class AuthComponent {
    serrverError = {};
    showSpinner = false;

    onSubmit() {
        this.showSpinner = true;
    }

}

bootstrap(AuthComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS
]);

export default AuthComponent;

import '../../style/index.scss';
import 'es6-shim';
import 'reflect-metadata';
import 'rxjs';
import 'zone.js/dist/zone-microtask';
import 'zone.js/dist/long-stack-trace-zone';
import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import RegisterComponent from './register.component';
import ForgotComponent from './forgot.component';
import LoginComponent from './login.component';
import RouteAndScroll from '../lib/route-and-scroll.directive';
import AuthService from './auth.service';
import {LocalStorage} from '../lib/storage';

@Component({
    selector: 'eh-auth',
    templateUrl: 'script/authentication/templates/signup.html',
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
    ROUTER_PROVIDERS,
    AuthService,
    LocalStorage
]);

export default AuthComponent;

import './style/index.scss';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';
import { provideStore } from '@ngrx/store';
import { REDUCERS, prevState } from './reducers/reducers';
import { AppComponent } from './app.component';

import { HttpService } from './lib/http';
import AuthService from './authentication/auth.service';
import { LocalStorage } from './lib/storage';

function main() {
    return bootstrap(AppComponent, [
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        HttpService,
        AuthService,
        LocalStorage,
        provideStore(REDUCERS, prevState()),
    ])
    .then(() => '🦄')
    .catch(err => console.error(err));
}

if (ENV === 'development' && HMR === true) {
    // activate hot module reload
    if (document.readyState === 'complete') {
        console.clear();
        main();
    } else {
        document.addEventListener('DOMContentLoaded', main);
    }
    module.hot.accept();
} else {
    throw new Error('Not implemented - prod mode');
}

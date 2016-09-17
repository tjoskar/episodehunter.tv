import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { EpisodehunterModule } from './episodehunter.module';

function main() {
    // JIT compilation
    platformBrowserDynamic().bootstrapModule(EpisodehunterModule);
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
    enableProdMode();
    main();
}

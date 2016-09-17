import './style/index.scss';
import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
    selector: 'episodehunter',
    template: require('./base-template.html'),
    providers: [ AppService ]
})
export class AppComponent {
    showSerachDialog = false;

    constructor(appService: AppService) {
        appService.syncCacheState();
    }

    toogleSeach() {
        this.showSerachDialog = !this.showSerachDialog;
    }

    closeSearchDialog() {
        this.showSerachDialog = false;
    }
}

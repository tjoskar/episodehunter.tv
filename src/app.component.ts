import { Component } from '@angular/core';
import SearchComponet from './search/search.component';
import { AppService } from './app.service';

@Component({
    selector: 'episodehunter',
    template: require('./base-template.html'),
    directives: [ SearchComponet ],
    providers: [ AppService ]
})
class AppComponent {
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

export {AppComponent};

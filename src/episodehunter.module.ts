import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, prevState } from './reducers/reducers';
import * as Services from './services';
import { SearchModule } from './components';
import { AppComponent } from './app.component';

const imports = [
    BrowserModule,
    HttpModule,
    StoreModule.provideStore(reducers, prevState()),
    SearchModule
];

@NgModule({
    declarations: [ AppComponent ],
    imports,
    bootstrap: [ AppComponent ],
    exports: [ ],
    providers: Object.values(Services)
})
export class EpisodehunterModule {}

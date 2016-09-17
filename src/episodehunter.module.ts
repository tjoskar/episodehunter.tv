import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { REDUCERS, prevState } from './reducers/reducers';
import { SearchModule } from './components';
import { AppComponent } from './app.component';

const imports = [
    BrowserModule,
    HttpModule,
    StoreModule.provideStore(REDUCERS, prevState()),
    SearchModule
];

@NgModule({
    declarations: [ AppComponent ],
    imports,
    bootstrap: [ AppComponent ],
    exports: [ ],
    providers: [ ]
})
export class EpisodehunterModule {}

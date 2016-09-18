import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UpcomingEffects } from './effects/upcoming.effect';
import { reducers, prevState } from './reducers/reducers';
import { UpcomingModule } from './upcomming/upcomming.module';
import * as Services from './services';
import { SearchModule } from './components';
import { AppComponent } from './app.component';
import { routing } from './app.routing';

const imports = [
    BrowserModule,
    HttpModule,
    StoreModule.provideStore(reducers, prevState()),
    EffectsModule.run(UpcomingEffects),
    SearchModule,
    UpcomingModule,
    routing
];

@NgModule({
    declarations: [ AppComponent ],
    imports,
    bootstrap: [ AppComponent ],
    exports: [ ],
    providers: Object.values(Services)
})
export class EpisodehunterModule {}

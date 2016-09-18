import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng2-lazyload-image';
import { PipesModule } from '../pipes/pipes.module';
import { EpisodeComponent } from './upcoming-shows/episode.component';
import { UpcomingShowsComponent } from './upcoming-shows/upcoming-shows.component';
import { UpcomingComponent } from './upcoming.component';

@NgModule({
    declarations: [ EpisodeComponent, UpcomingShowsComponent, UpcomingComponent ],
    imports: [ CommonModule, LazyLoadImageModule, PipesModule ],
    exports: [ UpcomingComponent ]
})
export class UpcomingModule {}

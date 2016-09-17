import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng2-lazyload-image';
import { MovieRenderer } from './movie.renderer';
import { SearchComponet } from './search.component';
// import { SearchService } from './search.service';
import { ShowRenderer } from './show.renderer';

@NgModule({
    declarations: [ MovieRenderer, ShowRenderer, SearchComponet ],
    imports: [ CommonModule, LazyLoadImageModule ],
    exports: [ SearchComponet ],
    providers: [ ]
})
export class SearchModule {}

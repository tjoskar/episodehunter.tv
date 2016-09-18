import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng2-lazyload-image';
import { PipesModule } from '../pipes/pipes.module';
import { ShowComponent } from './show.component';

@NgModule({
    declarations: [ ShowComponent ],
    imports: [ CommonModule, LazyLoadImageModule, PipesModule ],
    exports: [ ShowComponent ]
})
export class ShowModule {}

import { Pipe, PipeTransform } from '@angular/core';
import { Seasons } from '../../model/episode';

@Pipe({name: 'seasonNumber'})
export class SeasonNumberPipe implements PipeTransform {

    transform(seasons: Seasons): string[] {
        return Object.keys(seasons || {});
    }

}

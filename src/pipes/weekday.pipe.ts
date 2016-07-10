import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'weekday'})
export class WeekdayPipe implements PipeTransform {

    transform(date: Date): string {
        if (!(date instanceof Date)) {
            return '';
        }
        return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];
    }

}

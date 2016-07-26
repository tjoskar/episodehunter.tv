import { Routes } from '@ngrx/router';
import { UpcomingComponent } from './upcomming/upcoming.component';
import { ShowComponent } from './show/show.component';

export const ROUTES: Routes = [
    {
        path: '/',
        component: UpcomingComponent
    }, {
        path: '/show',
        component: ShowComponent
    }
];

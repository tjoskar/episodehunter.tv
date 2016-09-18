import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpcomingComponent } from './upcomming/upcoming.component';
import { ShowComponent } from './show/show.component';

const appRoutes: Routes = [
    { path: '', component: UpcomingComponent },
    { path: 'show', component: ShowComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpcomingComponent } from './upcomming/upcoming.component';

const appRoutes: Routes = [
    { path: '', component: UpcomingComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

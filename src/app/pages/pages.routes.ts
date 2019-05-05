import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddResellerComponent } from './reseller/add/add-reseller.component';
import { ShowResellersComponent } from './reseller/show/resellers/show-resellers.component';


const pageRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
            { path: 'resellers/agregar', component: AddResellerComponent, data: { title: 'Agregar Reseller' } },
            { path: 'resellers/gestionar', component: ShowResellersComponent, data: { title: 'Gestionar Reseller' } },
            { path: '', pathMatch:'full', redirectTo: '/dashboard' },
        ]
    },
];

export const  PAGES_ROUTES = RouterModule.forChild(pageRoutes);
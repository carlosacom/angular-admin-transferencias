import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// components
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PAGES_ROUTES } from './pages.routes';
import { AddResellerComponent } from './reseller/add/add-reseller.component';
import { ShowResellersComponent } from './reseller/show/resellers/show-resellers.component';
import { ShowResellerComponent } from './reseller/show/reseller/show-reseller.component';




@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        AddResellerComponent,
        ShowResellersComponent,
        ShowResellerComponent,
    ],
    exports: [
        DashboardComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        PAGES_ROUTES
    ]
})

export class PagesModule { }
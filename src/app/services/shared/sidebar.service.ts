import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
public menu: Array<any>;
  constructor() {
    this.menu = [
      {
        title: 'Dashboard',
        icon: 'mdi mdi-gauge',
        color: 'label-themecolor',
        submenus: [
          {
            title: 'Dashboard',
            url: '/dashboard'
          }
        ]
      },
      {
        title: 'Reseller',
        icon: 'mdi mdi-account-multiple',
        color: 'label-primary',
        submenus: [
          {
            title: 'Agregar',
            url:'/resellers/agregar'
          },
          {
            title: 'Gestionar',
            url:'/resellers/gestionar'
          }
        ]
      }
    ];
  }
}

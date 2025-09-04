import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Drawer } from './drawer/drawer';

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    Drawer,
  ],
  template: `
    <app-drawer #drawer>
      <app-header (menuClicked)="drawer.sidenav.toggle()"></app-header>
      <router-outlet></router-outlet>
    </app-drawer>
  `,
})
export class Layouts {
  @ViewChild('drawer') public drawer!: Drawer;
}

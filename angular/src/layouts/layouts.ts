import { Component, ViewChild } from '@angular/core';
import { Header } from './header/header';
import { Drawer } from './drawer/drawer';
import {MainContent} from '../app/maincontent/main-content';

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [
    Header,
    Drawer,
    MainContent,
  ],
  template: `
    <app-drawer #drawer>
      <app-header (menuClicked)="drawer.sidenav.toggle()"></app-header>
      <app-main-content appContent></app-main-content>
    </app-drawer>
  `,
})
export class Layouts {
  @ViewChild('drawer') public drawer!: Drawer;
}

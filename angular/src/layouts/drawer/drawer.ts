import { Component, ViewChild } from '@angular/core';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [
    MatSidenavModule,
  ],
  template: `
    <!-- Header-Slot: steht ÜBER dem Container -->
    <ng-content select="app-header"></ng-content>

    <!-- Sidenav-Container -->
    <mat-sidenav-container class="app-drawer-container">
      <mat-sidenav #sidenav mode="over">
        sidenav bar
      </mat-sidenav>

      <mat-sidenav-content class="app-content">
        <!-- Nur der Inhalts-Slot landet hier -->
        <ng-content select="[appContent]"></ng-content>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
})
export class Drawer {
  @ViewChild('sidenav') public sidenav!: MatSidenav;

  toggle(): void {
    this.sidenav.toggle();
  }
}

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
        <div class="sidenav-content">
          <h3>Important Links</h3>
          <ul>
            @for (link of sidenavLinks; track link) {
              <li>
                <a [href]="link.url" target="_blank" class="sidenav-link">{{ link.name }}</a>
              </li>
            }
          </ul>
        </div>
      </mat-sidenav>
      <mat-sidenav-content class="app-content">
        <ng-content select="[appContent]"></ng-content>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
})
export class Drawer {
  @ViewChild('sidenav') public sidenav!: MatSidenav;

  sidenavLinks = [
    { name: 'Java 21 API', url: 'https://docs.oracle.com/en/java/javase/21/docs/api/index.html' },
    { name: 'OCP Exam 1Z0-830', url: 'https://education.oracle.com/java-se-21-developer-professional/pexam_1Z0-830' },
    { name: 'Tim Buchalka Masterclass', url: 'https://www.udemy.com/course/java-the-complete-java-developer-course/' },
    { name: 'OCI', url: 'https://cloud.oracle.com/?region=sa-saopaulo-1' }
  ];

  toggle(): void {
    this.sidenav.toggle();
  }
}

import { Component, Output, EventEmitter } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  template: `
    <mat-toolbar color="primary">
      <button mat-icon-button (click)="menuClicked.emit()">
        <mat-icon>menu</mat-icon>
      </button>
      <span>{{ title }}</span>
    </mat-toolbar>
  `,
})
export class Header {
  title = "OCP Java";

  @Output() menuClicked = new EventEmitter<void>();
}

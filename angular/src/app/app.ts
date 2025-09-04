import { Component, signal } from '@angular/core';
import {Layouts} from '../layouts/layouts';

@Component({
  selector: 'app-root',
  imports: [
    Layouts,
  ],
  template: `
    <app-layouts></app-layouts>
  `,
})
export class App {
  protected readonly title = signal('OCP21');
}

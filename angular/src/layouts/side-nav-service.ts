import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SideNavService {
  public sideNavToggleSubject = new Subject<void>();

  toggle() {
    this.sideNavToggleSubject.next();
  }
}

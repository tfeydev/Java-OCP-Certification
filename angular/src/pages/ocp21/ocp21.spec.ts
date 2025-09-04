import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ocp21 } from './ocp21';

describe('Ocp21', () => {
  let component: Ocp21;
  let fixture: ComponentFixture<Ocp21>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ocp21]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ocp21);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaCore } from './java-core';

describe('JavaCore', () => {
  let component: JavaCore;
  let fixture: ComponentFixture<JavaCore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavaCore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavaCore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

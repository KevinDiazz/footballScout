import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorAnimation } from './error-animation';

describe('ErrorAnimation', () => {
  let component: ErrorAnimation;
  let fixture: ComponentFixture<ErrorAnimation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorAnimation],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorAnimation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaguesCard } from './leagues-card';

describe('LeaguesCard', () => {
  let component: LeaguesCard;
  let fixture: ComponentFixture<LeaguesCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaguesCard],
    }).compileComponents();

    fixture = TestBed.createComponent(LeaguesCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

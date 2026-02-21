import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReveal } from './card-reveal';

describe('CardReveal', () => {
  let component: CardReveal;
  let fixture: ComponentFixture<CardReveal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardReveal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardReveal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

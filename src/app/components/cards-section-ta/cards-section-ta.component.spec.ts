import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsSectionTaComponent } from './cards-section-ta.component';

describe('CardsSectionTaComponent', () => {
  let component: CardsSectionTaComponent;
  let fixture: ComponentFixture<CardsSectionTaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsSectionTaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsSectionTaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

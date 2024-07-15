import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveSectionComponent } from './interactive-section.component';

describe('InteractiveSectionComponent', () => {
  let component: InteractiveSectionComponent;
  let fixture: ComponentFixture<InteractiveSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractiveSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InteractiveSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

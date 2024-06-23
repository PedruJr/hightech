import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicSectionTaComponent } from './classic-section-ta.component';

describe('ClassicSectionTaComponent', () => {
  let component: ClassicSectionTaComponent;
  let fixture: ComponentFixture<ClassicSectionTaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassicSectionTaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassicSectionTaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

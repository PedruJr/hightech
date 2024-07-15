import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTaComponent } from './footer-ta.component';

describe('FooterTaComponent', () => {
  let component: FooterTaComponent;
  let fixture: ComponentFixture<FooterTaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterTaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterTaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

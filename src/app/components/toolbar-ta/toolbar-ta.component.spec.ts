import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarTaComponent } from './toolbar-ta.component';

describe('ToolbarTaComponent', () => {
  let component: ToolbarTaComponent;
  let fixture: ComponentFixture<ToolbarTaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarTaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolbarTaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

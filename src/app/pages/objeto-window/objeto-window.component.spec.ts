import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetoWindowComponent } from './objeto-window.component';

describe('ObjetoWindowComponent', () => {
  let component: ObjetoWindowComponent;
  let fixture: ComponentFixture<ObjetoWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjetoWindowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObjetoWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

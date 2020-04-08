import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentilationvisaComponent } from './ventilationvisa.component';

describe('VentilationvisaComponent', () => {
  let component: VentilationvisaComponent;
  let fixture: ComponentFixture<VentilationvisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentilationvisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentilationvisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxvisaComponent } from './fluxvisa.component';

describe('FluxvisaComponent', () => {
  let component: FluxvisaComponent;
  let fixture: ComponentFixture<FluxvisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluxvisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxvisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

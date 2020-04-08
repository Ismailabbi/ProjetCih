import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceprvComponent } from './surfaceprv.component';

describe('SurfaceprvComponent', () => {
  let component: SurfaceprvComponent;
  let fixture: ComponentFixture<SurfaceprvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceprvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceprvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

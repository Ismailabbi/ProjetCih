import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfacevisaComponent } from './surfacevisa.component';

describe('SurfacevisaComponent', () => {
  let component: SurfacevisaComponent;
  let fixture: ComponentFixture<SurfacevisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfacevisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfacevisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

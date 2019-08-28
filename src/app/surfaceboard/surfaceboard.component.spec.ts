import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceboardComponent } from './surfaceboard.component';

describe('SurfaceboardComponent', () => {
  let component: SurfaceboardComponent;
  let fixture: ComponentFixture<SurfaceboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

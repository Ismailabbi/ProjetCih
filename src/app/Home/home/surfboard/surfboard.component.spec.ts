import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfboardComponent } from './surfboard.component';

describe('SurfboardComponent', () => {
  let component: SurfboardComponent;
  let fixture: ComponentFixture<SurfboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

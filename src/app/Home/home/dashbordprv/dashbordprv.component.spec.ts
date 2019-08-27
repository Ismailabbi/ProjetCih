import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordprvComponent } from './dashbordprv.component';

describe('DashbordprvComponent', () => {
  let component: DashbordprvComponent;
  let fixture: ComponentFixture<DashbordprvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashbordprvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordprvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

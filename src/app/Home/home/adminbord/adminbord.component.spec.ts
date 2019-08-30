import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordComponent } from './adminbord.component';

describe('AdminbordComponent', () => {
  let component: AdminbordComponent;
  let fixture: ComponentFixture<AdminbordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

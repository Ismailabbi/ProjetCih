import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntServiceComponent } from './int-service.component';

describe('IntServiceComponent', () => {
  let component: IntServiceComponent;
  let fixture: ComponentFixture<IntServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

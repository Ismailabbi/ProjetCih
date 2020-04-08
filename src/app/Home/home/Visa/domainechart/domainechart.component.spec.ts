import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainechartComponent } from './domainechart.component';

describe('DomainechartComponent', () => {
  let component: DomainechartComponent;
  let fixture: ComponentFixture<DomainechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

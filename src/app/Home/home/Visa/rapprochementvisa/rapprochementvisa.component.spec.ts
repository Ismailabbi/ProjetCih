import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapprochementvisaComponent } from './rapprochementvisa.component';

describe('RapprochementvisaComponent', () => {
  let component: RapprochementvisaComponent;
  let fixture: ComponentFixture<RapprochementvisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapprochementvisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapprochementvisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

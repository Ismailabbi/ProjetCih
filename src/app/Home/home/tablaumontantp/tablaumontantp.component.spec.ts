import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaumontantpComponent } from './tablaumontantp.component';

describe('TablaumontantpComponent', () => {
  let component: TablaumontantpComponent;
  let fixture: ComponentFixture<TablaumontantpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaumontantpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaumontantpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturePrevisionComponent } from './facture-prevision.component';

describe('FacturePrevisionComponent', () => {
  let component: FacturePrevisionComponent;
  let fixture: ComponentFixture<FacturePrevisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturePrevisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturePrevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

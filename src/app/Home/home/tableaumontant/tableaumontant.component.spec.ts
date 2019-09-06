import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableaumontantComponent } from './tableaumontant.component';

describe('TableaumontantComponent', () => {
  let component: TableaumontantComponent;
  let fixture: ComponentFixture<TableaumontantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableaumontantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableaumontantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

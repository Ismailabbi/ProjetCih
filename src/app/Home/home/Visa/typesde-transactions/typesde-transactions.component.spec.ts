import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesdeTransactionsComponent } from './typesde-transactions.component';

describe('TypesdeTransactionsComponent', () => {
  let component: TypesdeTransactionsComponent;
  let fixture: ComponentFixture<TypesdeTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypesdeTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesdeTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

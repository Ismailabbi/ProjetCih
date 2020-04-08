import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisafactureComponent } from './visafacture.component';

describe('VisafactureComponent', () => {
  let component: VisafactureComponent;
  let fixture: ComponentFixture<VisafactureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisafactureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisafactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

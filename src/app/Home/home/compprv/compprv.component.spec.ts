import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompprvComponent } from './compprv.component';

describe('CompprvComponent', () => {
  let component: CompprvComponent;
  let fixture: ComponentFixture<CompprvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompprvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompprvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparaisonvisaComponent } from './comparaisonvisa.component';

describe('ComparaisonvisaComponent', () => {
  let component: ComparaisonvisaComponent;
  let fixture: ComponentFixture<ComparaisonvisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparaisonvisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparaisonvisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

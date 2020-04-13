import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparaisonVisaPComponent } from './comparaison-visa-p.component';

describe('ComparaisonVisaPComponent', () => {
  let component: ComparaisonVisaPComponent;
  let fixture: ComponentFixture<ComparaisonVisaPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparaisonVisaPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparaisonVisaPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

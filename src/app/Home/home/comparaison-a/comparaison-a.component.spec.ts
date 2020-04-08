import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparaisonAComponent } from './comparaison-a.component';

describe('ComparaisonAComponent', () => {
  let component: ComparaisonAComponent;
  let fixture: ComponentFixture<ComparaisonAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparaisonAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparaisonAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

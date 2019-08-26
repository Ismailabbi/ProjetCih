import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeventComponent } from './listevent.component';

describe('ListeventComponent', () => {
  let component: ListeventComponent;
  let fixture: ComponentFixture<ListeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VueGeneralComponent } from './vue-general.component';

describe('VueGeneralComponent', () => {
  let component: VueGeneralComponent;
  let fixture: ComponentFixture<VueGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VueGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VueGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxtableComponent } from './fluxtable.component';

describe('FluxtableComponent', () => {
  let component: FluxtableComponent;
  let fixture: ComponentFixture<FluxtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluxtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

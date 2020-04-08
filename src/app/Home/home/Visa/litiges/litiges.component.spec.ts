import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LitigesComponent } from './litiges.component';

describe('LitigesComponent', () => {
  let component: LitigesComponent;
  let fixture: ComponentFixture<LitigesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LitigesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LitigesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

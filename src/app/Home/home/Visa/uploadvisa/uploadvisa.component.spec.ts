import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadvisaComponent } from './uploadvisa.component';

describe('UploadvisaComponent', () => {
  let component: UploadvisaComponent;
  let fixture: ComponentFixture<UploadvisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadvisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadvisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

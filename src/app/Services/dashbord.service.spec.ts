import { TestBed } from '@angular/core/testing';

import { DashbordService } from './dashbord.service';

describe('DashbordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashbordService = TestBed.get(DashbordService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SrvsService } from './srvs.service';

describe('SrvsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SrvsService = TestBed.get(SrvsService);
    expect(service).toBeTruthy();
  });
});

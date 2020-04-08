import { TestBed } from '@angular/core/testing';

import { MontantserviceService } from './montantservice.service';

describe('MontantserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MontantserviceService = TestBed.get(MontantserviceService);
    expect(service).toBeTruthy();
  });
});

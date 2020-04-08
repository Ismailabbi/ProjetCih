import { TestBed } from '@angular/core/testing';

import { FiltragevisaService } from './filtragevisa.service';

describe('FiltragevisaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FiltragevisaService = TestBed.get(FiltragevisaService);
    expect(service).toBeTruthy();
  });
});

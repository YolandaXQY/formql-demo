import { TestBed } from '@angular/core/testing';

import { DwComponentsService } from './dw-components.service';

describe('DwComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DwComponentsService = TestBed.get(DwComponentsService);
    expect(service).toBeTruthy();
  });
});

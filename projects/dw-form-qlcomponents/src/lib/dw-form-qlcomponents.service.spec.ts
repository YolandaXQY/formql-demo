import { TestBed } from '@angular/core/testing';

import { DwFormQLComponentsService } from './dw-form-qlcomponents.service';

describe('DwFormQLComponentsService', () => {
  let service: DwFormQLComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DwFormQLComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

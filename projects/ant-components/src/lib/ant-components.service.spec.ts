import { TestBed } from '@angular/core/testing';

import { AntComponentsService } from './ant-components.service';

describe('AntComponentsService', () => {
  let service: AntComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AntComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

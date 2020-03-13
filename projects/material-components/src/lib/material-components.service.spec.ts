import { TestBed } from '@angular/core/testing';

import { MaterialComponentsService } from './material-components.service';

describe('MaterialComponentsService', () => {
  let service: MaterialComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

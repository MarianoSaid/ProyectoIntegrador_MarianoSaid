import { TestBed } from '@angular/core/testing';

import { HySService } from './hy-s.service';

describe('HySService', () => {
  let service: HySService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HySService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ReclamServiceService } from './reclam-service.service';

describe('ReclamServiceService', () => {
  let service: ReclamServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReclamServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SuboordonneServiceService } from './suboordonne-service.service';

describe('SuboordonneServiceService', () => {
  let service: SuboordonneServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuboordonneServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

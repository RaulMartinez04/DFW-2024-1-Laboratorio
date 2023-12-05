import { TestBed } from '@angular/core/testing';

import { CostumerImageService } from './customer-image.service';

describe('CostumerImageService', () => {
  let service: CostumerImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CostumerImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

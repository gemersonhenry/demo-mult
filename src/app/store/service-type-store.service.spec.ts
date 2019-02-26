import { TestBed } from '@angular/core/testing';

import { ServiceTypeStoreService } from './service-type-store.service';

describe('ServiceTypeStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceTypeStoreService = TestBed.get(ServiceTypeStoreService);
    expect(service).toBeTruthy();
  });
});

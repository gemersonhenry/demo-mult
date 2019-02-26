import { TestBed } from '@angular/core/testing';

import { FiltersStateService } from './filters-state.service';

describe('FiltersStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FiltersStateService = TestBed.get(FiltersStateService);
    expect(service).toBeTruthy();
  });
});

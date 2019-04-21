import { TestBed } from '@angular/core/testing';

import { NgDeduplicateInterceptorService } from './ng-deduplicate-interceptor.service';

describe('NgDeduplicateInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgDeduplicateInterceptorService = TestBed.get(NgDeduplicateInterceptorService);
    expect(service).toBeTruthy();
  });
});

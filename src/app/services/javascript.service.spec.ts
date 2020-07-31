import { TestBed } from '@angular/core/testing';

import { JavascriptService } from './javascript.service';

describe('JavascriptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JavascriptService = TestBed.get(JavascriptService);
    expect(service).toBeTruthy();
  });
});

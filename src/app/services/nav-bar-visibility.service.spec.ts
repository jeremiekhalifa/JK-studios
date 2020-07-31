import { TestBed } from '@angular/core/testing';

import { NavBarVisibilityService } from './nav-bar-visibility.service';

describe('NavBarVisibilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavBarVisibilityService = TestBed.get(NavBarVisibilityService);
    expect(service).toBeTruthy();
  });
});

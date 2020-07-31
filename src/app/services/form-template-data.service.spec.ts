import { TestBed } from '@angular/core/testing';

import { FormTemplateDataService } from './form-template-data.service';

describe('FormTemplateDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormTemplateDataService = TestBed.get(FormTemplateDataService);
    expect(service).toBeTruthy();
  });
});

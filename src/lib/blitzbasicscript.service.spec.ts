import { TestBed } from '@angular/core/testing';

import { BlitzbasicscriptService } from './blitzbasicscript.service';

describe('BlitzbasicscriptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlitzbasicscriptService = TestBed.get(BlitzbasicscriptService);
    expect(service).toBeTruthy();
  });
});

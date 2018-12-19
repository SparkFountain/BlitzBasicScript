import { TestBed } from '@angular/core/testing';

import { BlitzBasicScriptService } from './blitzbasicscript.service';

describe('BlitzbasicscriptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlitzBasicScriptService = TestBed.get(BlitzBasicScriptService);
    expect(service).toBeTruthy();
  });
});

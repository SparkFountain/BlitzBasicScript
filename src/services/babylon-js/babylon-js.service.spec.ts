import { TestBed } from '@angular/core/testing';

import { BabylonJSService } from './babylon-js.service';

describe('BabylonJSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BabylonJSService = TestBed.get(BabylonJSService);
    expect(service).toBeTruthy();
  });
});

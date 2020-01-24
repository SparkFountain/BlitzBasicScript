import {TestBed} from '@angular/core/testing';
import { BlitzBasicScriptGameService } from './blitz-basic-script-game.service';


describe('BlitzbasicscriptService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: BlitzBasicScriptGameService = TestBed.get(BlitzBasicScriptGameService);
        expect(service).toBeTruthy();
    });
});

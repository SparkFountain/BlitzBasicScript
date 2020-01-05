import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {GameStateService} from '../../game-state/game-state.service';

@Injectable()
export class CommandsIOKeyboardService {
    constructor(private gameState: GameStateService) {

    }

    flushKeys(): Observable<void> {
        return of(this.gameState.flushKeys());
    }

    getKey(): Observable<number> {
        return of(this.gameState.getKeyAsciiCode());
    }

    input(message?: string): Observable<string> {
        //TODO implement:
        // -get location of x, y from gameState
        // -print message at that position, followed by a blinking cursor
        // -insert / delete characters until Enter is hit
        // -return the input value
        return of('');
    }

    keyDown(code: number): Observable<boolean> {
        return of(this.gameState.isKeyDown(code));
    }

    keyHit(code: number): Observable<number> {
        return of(this.gameState.getKeyHits(code));
    }

    keyWait(): Observable<number> {
        return this.waitKey();
    }

    waitKey(): Observable<number> {
        //TODO implement
        return of(0);
    }
}

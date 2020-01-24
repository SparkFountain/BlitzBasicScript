import {Injectable} from '@angular/core';
import {Observable, of, Subscriber} from 'rxjs';
import {GameStateService} from '../../game-state.service';

@Injectable()
export class CommandsIOMouseService {
    constructor(private gameState: GameStateService) {

    }

    flushMouse(): Observable<void> {
        return of(this.gameState.flushMouse());
    }

    getMouse() {
    }

    hidePointer(): Observable<void> {
        return new Observable<void>((observer: Subscriber<void>) => {
            //TODO set CSS class on canvas
            observer.next();
            observer.complete();
        });
    }

    mouseDown(code: number): Observable<boolean> {
        return of(this.gameState.isMouseDown(code));
    }

    mouseHit(code: number): Observable<number> {
        return of(this.gameState.getMouseHits(code));
    }

    mouseWait() {
    }

    mouseX() {
    }

    mouseXSpeed() {
    }

    mouseY() {
    }

    mouseYSpeed() {
    }

    mouseZ() {
    }

    mouseZSpeed() {
    }

    moveMouse() {
    }

    showPointer() {
    }

    waitMouse() {
    }
}

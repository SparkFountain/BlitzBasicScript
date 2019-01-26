import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {GameStateService} from '../../game-state/game-state.service';

@Injectable()
export class CommandsIOKeyboard {
  constructor(private gameState: GameStateService) {

  }

  flushKeys() {
  }

  getKey() {
  }

  input() {
  }

  keyDown(code: number): Observable<boolean> {
    return of(this.gameState.isKeyDown(code));
  }

  keyHit() {
  }

  keyWait() {
  }

  waitKey() {
  }
}

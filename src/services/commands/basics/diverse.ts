import {Observable, of, Subscriber} from 'rxjs';
import {GameStateService} from '../../game-state/game-state.service';

export class CommandsBasicsDiverse {
  constructor(private gameState: GameStateService) {

  }

  appTitle(title: string): Observable<void> {
    return of(this.gameState.setAppTitle(title));
  }

  commandLine() {

  }

  debugLog(message: string): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      console.log(message);

      observer.next();
      observer.complete();
    });
  }

  getEnv() {
  }

  runtimeError() {

  }

  runtimeStats() {
  }

  setEnv() {
  }

  systemProperty() {
  }
}

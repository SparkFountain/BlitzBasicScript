import {Injectable} from '@angular/core';
import {Observable, of, Subscriber} from 'rxjs';
import {Graphics2dService} from '../../2d/graphics2d.service';
import {GameStateService} from '../../game-state/game-state.service';

@Injectable()
export class CommandsGraphics2dPixel {
  constructor(private graphics2d: Graphics2dService,
              private gameState: GameStateService) {

  }

  colorBlue(): Observable<number> {
    return of(this.gameState.get('screen.color.blue'));
  }

  colorGreen(): Observable<number> {
    return of(this.gameState.get('screen.color.green'));
  }

  colorRed(): Observable<number> {
    return of(this.gameState.get('screen.color.red'));
  }

  plot(x: number, y: number): Observable<void> {
    return this.graphics2d.plot(x, y);
  }
}

import {Injectable} from '@angular/core';
import {Observable, Subscriber} from 'rxjs';
import {BabylonJSService} from '../../babylon-js/babylon-js.service';
import {Graphics2dService} from '../../2d/graphics2d.service';
import {GameStateService} from '../../game-state/game-state.service';

@Injectable()
export class CommandsGraphics2dGraphics {
  constructor(private babylonjs: BabylonJSService,
              private graphics2dService: Graphics2dService,
              private gameState: GameStateService
  ) {

  }

  cls(): Observable<void> {
    return this.graphics2dService.cls();
  }

  clsColor(red: number, green: number, blue: number): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      this.gameState.set('screen.clsColor.red', red);
      this.gameState.set('screen.clsColor.green', green);
      this.gameState.set('screen.clsColor.blue', blue);

      observer.next();
      observer.complete();
    });
  }

  color(red: number, green: number, blue: number): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      this.gameState.set('screen.color.red', red);
      this.gameState.set('screen.color.green', green);
      this.gameState.set('screen.color.blue', blue);

      observer.next();
      observer.complete();
    });
  }

  line(beginX: number, beginY: number, endX: number, endY: number) {
    return this.graphics2dService.line(beginX, beginY, endX, endY);
  }

  origin(x: number, y: number): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      this.gameState.set('screen.origin.x', x);
      this.gameState.set('screen.origin.y', y);

      observer.next();
      observer.complete();
    });
  }

  oval(x: number, y: number, width: number, height: number, filled: boolean): Observable<void> {
    return this.graphics2dService.oval(x, y, width, height, filled);
  }

  rect(x: number, y: number, width: number, height: number, filled: boolean): Observable<void> {
    return this.graphics2dService.rect(x, y, width, height, filled);
  }

  viewport() {

  }
}

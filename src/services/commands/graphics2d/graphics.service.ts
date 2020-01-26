import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { GameStateService } from '../../game-state.service';
import { BabylonJSService } from '../../babylon-js.service';
import { Render2dService } from '../../render2d.service';

@Injectable()
export class CommandsGraphics2dGraphicsService {
  constructor(private babylonjs: BabylonJSService,
    private render2dService: Render2dService,
    private gameState: GameStateService
  ) {

  }

  cls(): Observable<void> {
    return this.render2dService.cls();
  }

  clsColor(red: number, green: number, blue: number): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      this.gameState.setScreenClsColor({
        red: red,
        green: green,
        blue: blue
      });

      observer.next();
      observer.complete();
    });
  }

  color(red: number, green: number, blue: number): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      this.gameState.setScreenColor({
        red: red,
        green: green,
        blue: blue
      });

      observer.next();
      observer.complete();
    });
  }

  line(beginX: number, beginY: number, endX: number, endY: number) {
    return this.render2dService.line(beginX, beginY, endX, endY);
  }

  origin(x: number, y: number): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      this.gameState.setScreenOrigin({
        x: x,
        y: y
      });

      observer.next();
      observer.complete();
    });
  }

  oval(x: number, y: number, width: number, height: number, filled?: boolean): Observable<void> {
    return this.render2dService.oval(x, y, width, height, filled);
  }

  rect(x: number, y: number, width: number, height: number, filled?: boolean): Observable<void> {
    return this.render2dService.rect(x, y, width, height, filled);
  }

  viewport(beginX: number, beginY: number, width: number, height: number): Observable<void> {
    return new Observable<void>((observer: Subscriber<void>) => {
      this.gameState.setScreenViewport({
        beginX: beginX,
        beginY: beginY,
        width: width,
        height: height
      });

      observer.next();
      observer.complete();
    });
  }
}
